let allElements1 = document.body;

console.log(allElements1)

let allElements2 = document.querySelector('body');
console.log(allElements2)

let allInputs = document.querySelectorAll('input');
allInputs.forEach((el) => {
    console.log(el)
})

const getInput = () => {
    let allInputs1 = document.getElementsByTagName('input');
    let inputsArr = [allInputs1];
    inputsArr.forEach((el) => {
        console.log(el)
    })

}
getInput();


