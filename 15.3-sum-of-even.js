function getSumOfEven(arr) {
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9]; // it return NaN because we reach outside the arr so we need to shift one digit to get the result 
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // by using console log it return NaN since the return will not be number