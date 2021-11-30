let randomChar = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1);
let result = document.querySelector('.result')
let correct = document.querySelector('.correctKeys')
let hint = document.querySelector('.hint');
let hintText = document.querySelector('.hintText');



console.log(randomChar)

const  convertLetterToNumber = (str) => {
    let out = 0, len = str.length;
    for (pos = 0; pos < len; pos++) {
      out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
    }
    return out;
  }
 
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
        hint.addEventListener('click',() => {
            hintText.textContent = `it's the ${convertLetterToNumber(randomChar)-32} letter`;
        })
        
    }
 ;
})}

game();
  



