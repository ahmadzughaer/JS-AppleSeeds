
let dec = document.querySelector('.dec');
let inc = document.querySelector('.inc');
let text = document.querySelector('.text');
let num = 30;




dec.addEventListener('click', () => {
    if (num > 6) {
        num--;
        let font = text.style.fontSize = `${num}px`;
        console.log(font)
        return font;
    }
})


inc.addEventListener('click', () => {
    if (num < 100) {
        num++;
        let font = text.style.fontSize = `${num}px`;
        console.log(font)
        return font;
    }
})


