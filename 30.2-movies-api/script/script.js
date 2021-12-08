
const userNameInput = document.querySelector('#movieName');
const title = document.querySelector('.title')
const poster = document.querySelector('.poster')
const genre = document.querySelector('.genre')
const year = document.querySelector('.year')
const plot = document.querySelector('.plot')
const director = document.querySelector('.director')
const actors = document.querySelector('.actors')
const rating = document.querySelector('.rating')
const submit = document.querySelector('.submit')
const imdRating = document.querySelector('.imdRating')
const tomatoesRating = document.querySelector('.tomatoesRating')
const metaRating = document.querySelector('.metaRating')
const card = document.querySelector('.card');

let baseURL, data;


const getUser = async () => {
    try {
        data = await (await fetch(baseURL)).json()
        poster.src = data.Poster
        title.textContent =` Title: ${data.Title}`;
        genre.textContent = `Genre: ${data.Genre}`;
        year.textContent = `Year: ${data.Year}`;
        plot.textContent = `Plot: ${data.Plot}`;
        director.textContent = `Director: ${data.Director}`;
        actors.textContent = `Actors: ${data.Actors}`;
        imdRating.textContent = `IMD rating: ${data.imdbRating}`;
        tomatoesRating.textContent = `Tomatoes Rating: ${data.Ratings[1].Value}`;
        metaRating.textContent = `Metascore: ${data.Metascore}`;
    }
    catch {
        console.log('error')
    }
}

const clickFunction = () => {
    submit.addEventListener('click', () => {
        let movieName = userNameInput.value
        let nameOFMovie = movieName.replaceAll(' ', '+');
        baseURL = `http://www.omdbapi.com/?t=${nameOFMovie}&apikey=a117daaf`;
        card.style.visibility = 'visible'
        userNameInput.value = '';

        getUser()
    });
}
clickFunction()

// userNameInput.addEventListener('keydown', (event) => {
//     if (event.keyCode === 13) {
//         baseURL = `https://api.github.com/users/${userNameInput.value}`;

//         userNameInput.value = '';

//         getUser()
//     }
// })
