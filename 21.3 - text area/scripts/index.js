let textArea = document.querySelector('#text-area');
let btn = document.querySelector('.submit');

let box = document.querySelector('.box');


textArea.addEventListener('input', () => {

    if (textArea.value.length >= 100) {
        console.log(textArea.value.length);
        box.textContent = 'you can submit now'
        box.style.color = 'green';
    } else {
        box.textContent = 'you did not reach the minimum characters'
        box.style.color = 'red';
    }
})



btn.addEventListener('click', () => {

    if (textArea.value.length >= 100) {
        btn.disabled = false
    } else {
        btn.disabled = true
    }
})
