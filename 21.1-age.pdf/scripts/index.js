
let input = document.querySelector('.input');
let btn = document.querySelector('.submit');
let box = document.querySelector('.box');
const div = document.createElement('div');
box.appendChild(div)

btn.addEventListener('click', () => {
    let num = input.value;
    let regex = /^[0-9]+$/;
    if (num.match(regex) && num >= 18) {
        div.innerHTML = `<h3 style="margin-top: 10px; color:green" class="smile"> You can drink 🍺	</h3>`

    } else if (num.match(regex) && num < 18) {
        div.innerHTML = `<h3 style="margin-top: 10px; color:red" class="smile"> You’re too young 🍼</h3>`
    } else {
        div.innerHTML = `<h3 style="margin-top: 10px; color:orange" class="smile"> You need to enter a number dude</h3>`
    }

})
