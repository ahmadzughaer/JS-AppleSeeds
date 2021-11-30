
let yourName = document.querySelector('.yourName');
let yourEmail = document.querySelector('.yourEmail');
let yourAge = document.querySelector('.yourAge');
let divValues = document.querySelector('.values');
let verifybtn = document.querySelector('#verfiy');
divValues.style.display = 'none';
let form = document.querySelector('#form-submit');
let fname = document.querySelector('#fname');
let age = document.querySelector('#age');
let email = document.querySelector('#email');
let change = document.querySelector('#change');
change.style.display = 'none'

const h2 = document.querySelector('.congrat')
h2.style.display = 'none'
h2.style.color = 'green'

form.addEventListener('submit', (e) => {
    yourName.textContent = `Your name is ${fname.value}`;
    yourAge.textContent = `Your age is ${age.value}`;
    yourEmail.textContent = `Your email is ${email.value}`;
    e.preventDefault();
    form.style.display = 'none';
    divValues.style.display = 'block';
})

verifybtn.addEventListener('click', () => {
    h2.style.display = 'block'
    divValues.style.display = 'none';
    change.style.display = 'block'

})
change.addEventListener('click', () => {
    change.style.display = 'none'
    h2.style.display = 'none'
    form.style.display = 'block';
})

