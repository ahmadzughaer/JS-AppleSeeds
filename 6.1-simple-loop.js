const arrNum = () => {
    let arr = [];
    for (let i = 1; i <= 9; i++) {
        arr.push(i);
    }
    console.log(arr);
}

const arrLength = (arr) => { 
    let length =0;
    while (arr[length]!==undefined) {
        length++;
    }
    console.log(length);
}
const arrAdd = (arr) => {
    let sum =0;
    for (let i = arr[0]; i <= arr.length-1; i++) {
        sum+= arr[i];
    }
    console.log(sum);
}
const arrMulti = (arr) => {
    let multi =1;
    for (let i = arr[0]; i <= arr.length-1; i++) {
        multi*= arr[i];
    }
    console.log(multi);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrNum();
arrAdd(arr);
arrMulti(arr);
arrLength(arr);