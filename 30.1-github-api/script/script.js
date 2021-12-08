
const userNameInput = document.querySelector('#userName');
const submit = document.querySelector('.submit')
let baseURL, data;


const getUser = async () => {
    try {
        data = await (await fetch(baseURL)).json()
        const div = document.createElement('div')
        div.innerHTML = `        
        <a href="${data.html_url}" target="blank" class="githubLink">
        <h3>Enter User Data</h3>
        <img class="userImg" src="${data.avatar_url}" alt="">
        <p class="name">username: ${data.login}</p>
        <p class="numberOfRepo">number of repositories: ${data.public_repos}</p>
    </a>`
    div.setAttribute('class', 'card')
    document.body.appendChild(div);

    }
    catch {
        console.log('error')
    }
}

const clickFunction = () => {
    submit.addEventListener('click', () => {
        baseURL = `https://api.github.com/users/${userNameInput.value}`;
        userNameInput.value = '';

        getUser()
    });
}
clickFunction()

userNameInput.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        baseURL = `https://api.github.com/users/${userNameInput.value}`;

        userNameInput.value = '';

        getUser()
    }
})
