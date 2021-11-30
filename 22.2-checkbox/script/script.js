let check = document.querySelector('input[name=checkbox]')
let img = document.querySelector('.img')
img.style.display = 'none'


check.addEventListener('change', () => {
    if (check.checked) {
        img.style.display = 'block'

    } else {
        img.style.display = 'none'
    }
})