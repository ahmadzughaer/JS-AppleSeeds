
document.addEventListener("paste", (e) => {
    if (e.target.type === "text") {
        let data = e.clipboardData.getData('Text');
        data = data.split('');
        [].forEach.call(document.querySelectorAll("#ipt"), (el, index) => {
            el.value = data[index];
        });
    }
});

let inputOne = document.getElementsByClassName("inputs")[0];
inputOne.onkeyup = (e) => {
    let target = e.target;
    let maxLength = parseInt(target.attributes["maxlength"].value);
    let myLength = target.value.length;
    if (myLength >= maxLength) {
        let next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
}

document.querySelector('.btn').addEventListener('click', () => {
    let code = document.querySelector('.data').textContent
    let inputArr = [];
    [].forEach.call(document.querySelectorAll("#ipt"), (el) => {
        inputArr.push(el.value)
    });
    console.log(code)
    if (inputArr.join('') === code) {
        return alert('Correct')
    } else {
        return alert('Try again')
    }
})
