const print = (str) => str;

const isString = (str, func) => {
    if (typeof str === `string`) {
        console.log(func(str));
    }
}

const toUpperCasestr = (str, func) => {
    const arr = str.split(' ');
    arr[0] = arr[0].toUpperCase();
    let newStr = arr.join(' ');
    return func(newStr);
}

const dashFunc = (str) => {
    return str.replaceAll(' ', '-');
}
const slashFunc = (str) => {
    return str.replaceAll(' ', '/');
}

console.log(toUpperCasestr('hello world hey', dashFunc));
console.log(toUpperCasestr('hello world hey', slashFunc));
isString('55', print);


const calculate = (num1, num2, func) => {
    return func(num1, num2);
}

const summation = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;

console.log(calculate(10, 5, summation));
console.log(calculate(10, 5, subtraction));


