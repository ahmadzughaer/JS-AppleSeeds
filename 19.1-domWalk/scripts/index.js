
// Create a variable that holds the <li> element with the class “start-here”.
let startHere = document.querySelector('start-here')

// 1. Change the text from “title 2” to “main title”
document.querySelector('li').textContent = 'main title';

// 2. Add another sub title with the text “sub title 4”
const li = document.createElement('li');
li.innerHTML = `<li> sub title 4 </li>`
document.querySelectorAll('ul')[1].appendChild(li);
// 3. Delete the last <li> element from the list.
document.querySelector("ul").lastElementChild.remove();

// 4. Change the <title> element text to “Master Of The Dom”.
document.title = "Master Of The Dom";

// 5. Change the text of the <p> element ot something else of your
document.querySelector('p').textContent = 'My new text'

