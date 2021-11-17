// Block 1
function funcA() {
    console.log(a);  // it will log 1 because a is a global var
    console.log(foo());  // it will log 2 because it's still on the same scope
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();

// Block 2

var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName()); // will log Aurelio De Rosa
var test = obj.prop.getFullName; // wen need to add ()
console.log(test()); // I'm not if it will return anything because it's not a function so no need to have() at the end

// Block 3
function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a); // number I have checked it will return undifined make sense since at the beginning a = b and then assign to number
console.log(typeof b); // number

// Block 4
function funcC() {
    console.log("1");
}
funcC(); // log 2 because it always return the last declared function
function funcC() {
    console.log("2");
}
funcC() // log 2

// Block 5

function funcD1() {
    d = 1;
}
funcD1();
console.log(d); // log 1
function funcD2() {
    var e = 1; // remove var
}
funcD2();
console.log(e); // not defined

// Block 6

function funcE() {
    console.log("Value of f in local scope: ", f); // undefined
}
console.log("Value of f in global scope: ", f); // "Value of f in global scope: " 1
var f = 1;
funcE();
