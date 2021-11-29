let img = document.querySelector('.main img');

console.log(img)

img.addEventListener('click', () => {

    if (img.src.match("on.png")) {
        img.src = "/assets/img/off.png";
      } else {
        img.src = "/assets/img/on.png";
      }
    })

