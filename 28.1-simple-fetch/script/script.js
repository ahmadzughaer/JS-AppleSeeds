const jokebtn = document.querySelector(`.getJoke`);
const jokeHolder = document.querySelector(`.joke p`);
const jokeTitle= document.querySelector(`.joke h3`);
const backBtn = document.querySelector('.backBtn');
backBtn.style.display='none'

const jokeButtonText = jokebtn.querySelector('.btn-text');

const baseURL = 'https://api.jokes.one/jod';

const getJoke = () => {
  jokeHolder.textContent = 'Loading 🥪🥪🥪🥪';
  fetch(baseURL)
    .then((response) => response.json())
    .then((joke) => (jokeHolder.textContent = joke.contents.jokes[0].joke.text, jokeTitle.textContent = joke.contents.jokes[0].joke.title ))
    .catch((e) => (jokeHolder.textContent = 'try again'));
};

const getJoke2 = async () => {
  jokeHolder.textContent = 'Loading 🥪🥪🥪🥪';
  try {
    const data = await (await fetch(baseURL)).json()
    jokeHolder.textContent = data.contents.jokes[0].joke.text
     jokeTitle.textContent = data.contents.jokes[0].joke.title
  }
  catch {
    jokeHolder.textContent = 'try again'
  }
}

jokebtn.addEventListener('click', () => {
  getJoke()
  getJoke2()
  jokebtn.style.display = 'none'
  backBtn.style.display='block'
});

backBtn.addEventListener('click', () => {
  window.location.reload()
})