const doubledValue = (arr) => { // section 1
    const newArr = [];
    arr.map((el) => {
        newArr.push(el * 2);
    })
    console.log(newArr);
}
const arr = [1, 2, 4, 5, 6];
doubledValue(arr);

const onlyEvenValues = (arr) => { // section 2
    const newArr = [];
    arr.map((el) => {
        if (el % 2 === 0) {
            newArr.push(el);
        }
    })
    console.log(newArr);
}
onlyEvenValues(arr);

const showFirstAndLast = (arr) => { // section 3
    const newArr = [];
    const len = arr.length;
    arr.map((el, idx) => {
        if (idx === 0) {
            newArr.push(el);
        }
        else if (idx === len - 1) {
            newArr.push(el);
        }
    })
    console.log(newArr.toString());
}

showFirstAndLast(arr);


const vowelCount = (str) => { // section 4
    const newStr = str.toLowerCase().split('');
    const obj = {};
    let vowels = "aeiou";
    newStr.forEach((el) => {
        if (vowels.indexOf(el) !== -1) {
            if (el in obj) {
                obj[el]++;
            } else {
                obj[el] = 1;
            }
        }
    });
    return obj;
}

console.log(vowelCount('hEllo there'));

const capitalize = (str) => { // section 5
    let newStr = str.split(' ');
    let upperCase = newStr.map(el => el.toUpperCase());
    return upperCase.join(' ');
}
console.log(capitalize('hey hello'));

const shiftLetters = (str) => { // section 6
    let txt = str.toLowerCase().split('');
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let shifted = [];
    txt.forEach((el) => {
        if (letters.indexOf(el) !== -1) {
            shifted.push(letters[letters.indexOf(el) - 1]);
        }
    });
    console.log(shifted.join(''));
}

shiftLetters('test dfdf');

const swapCase = (str, func) => { // section 7
    let txt = str.split(' ');
    let arr=[];
    txt.map((el, idx) => {
        if (idx % 2 !== 0) {
            arr.push(func(el));
        }
        else {
            arr.push(el);
        }
    })
    console.log(arr.join(' '));
}

swapCase('hello hey how are you', capitalize);



