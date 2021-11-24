// Block 1
var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
// what I'm thinking about this code is that if we will console log firstResult it will return someFunction an the same as if we want to log result. 

// Block 2
var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2(); // log the function
console.log(a); // log 1

// Block 3

let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 0);
}
// already explained with var as a global variable it will log 3 3times