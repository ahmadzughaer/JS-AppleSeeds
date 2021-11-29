const header = document.createElement('div');
header.setAttribute('class', 'header'  )
header.innerHTML=`<h2>hello</h2>`
header.setAttribute("style", "width: 100%; height: 20vh; background: moccasin;  margin-bottom: 1%;");
document.body.appendChild(header)
const main = document.createElement('div');
main.setAttribute('class', 'main'  )
const footer = document.createElement('div');
footer.setAttribute('class', 'footer'  )


document.body.append(main)
document.body.append(footer)