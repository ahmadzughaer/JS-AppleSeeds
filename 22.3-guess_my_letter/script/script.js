let randomChar = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);
let result = document.querySelector('.result')
let correct = document.querySelector('.correctKeys')


console.log(randomChar)

 
const game = () => {document.addEventListener('keydown', (e) => {
console.log(e.key)

    if ( randomChar === e.key) {
        correct.textContent += randomChar;
        randomChar = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1)
        result.textContent = 'you are good'
        result.style.color = 'green'
         console.log(randomChar)
    } else {
        result.textContent = 'wrong guess'
        result.style.color = 'red'
    }

})}
game()

