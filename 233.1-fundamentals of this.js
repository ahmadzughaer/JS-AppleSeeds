// Question 1:
// In your own words what will this point to and why?(Note 
// this is the global scope)
console.log(this); // it will log window 

// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
const myObj = {
 name: "Timmy",
 greet: () => { // convert it to function 
 console.log(`Hello ${this.name}`); // it will log hello
 },
};
myObj.greet();

// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
 console.log(this); // it will log nothing 
};

// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
 console.log(this); 
};
myFuncArrow(); // it will log window 

// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
document.querySelector(".element").addEventListener(() => { // if there is an element with class element itwill return this element
 console.log(this); // syntax error because there is not html element class called element
})