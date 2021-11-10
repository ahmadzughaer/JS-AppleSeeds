
const uniqueChars = (arr) => {
    return arr.filter((value, index) => arr.indexOf(value) === index);
};


let arr = [3, 4, 5, 5, 3];
console.log(uniqueChars(arr));

