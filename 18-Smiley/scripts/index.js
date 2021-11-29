let input = document.querySelector('.input');

document.querySelector('.submit').addEventListener('click', () => {
    let num = input.value;
    let regex = /^[0-9]+$/;
    if (num.match(regex)) {
        for (let i = 0; i < +num; i++) {
            let box = document.querySelector('.box');
            const div = document.createElement('div');
            div.innerHTML = `<div style="margin-top: 10px" class="smile"> 😄 </div>`
            box.appendChild(div)[i];
        };
    } else {
        alert('enter a number');
    }
    return ;
})

// document.querySelector('.submit').addEventListener('click', () => {
//     window.location.reload()
// }) 


// input.onkeyup = () => {
//     location.reload()
// }


