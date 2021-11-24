/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

// From function declarations to function expressions
// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
// }
// arrow function 
const welcome =() => 'Welcome to Appleseeds Bootcamp!';
console.log(welcome());

// function power(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
// }

// arrow function 
const power = a => Math.pow(a, 2);
console.log(power(3));


// function add(a, b = 5) {
//     let myNumber = a;
//     let sum = myNumber + b;
//     return sum;
// }

// arrow function 
const add = (a, b =5) => a+b;
console.log(add(3));

// From function expressions to function declarations

// const hello = () => "Hello!";

 function hello () {
     return 'Hello!';
 }

// const squareRoot = a => Math.sqrt(a);

function squareRoot(a) {
    let num = a;
    let result = Math.sqrt(num);
    return result; 
}

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;

function randomNumbers (a,b) {
    let random = Math.random();
    let myNum = random * (a-b) +b;
    return myNum;
}
