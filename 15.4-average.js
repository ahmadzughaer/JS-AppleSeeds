function calcAverage(arr) {
    var sum =0; // it will return NaN because we did not assign anything to sum
    console.log(arr.length);
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length; // we need to add / arr.length to get the average
}
console.log(calcAverage([85, 90, 92]));