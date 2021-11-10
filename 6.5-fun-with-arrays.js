
let filledArr1 = new Array(100).fill({'10':'8'});
console.log(filledArr1)

let filledArr2 = Array.from(Array(100).keys())
console.log(filledArr2)

let object = {'hello': 'world', 'hey': 'you', 'good': 'fine'};
let myResult = Object.values(object);
console.log(myResult);

let arr = ['hey', 'how', 'are', 'you'];
let obj = Object.assign({}, arr)
console.log(obj);

let obj1 = { '0': 'hey', '1': 'how', '2': 'are', '3': 'you' };
let arr1 = Array.isArray(obj1);

console.log(arr1);

let arr2= ['how', 'are', 'you'];
const newArr = arr2.slice();
console.log(newArr);


let arr3 = ['herh', 'dfds', 'sdfasd'];
let arr4 = arr3; 
arr4.push('test');
console.log(arr3);