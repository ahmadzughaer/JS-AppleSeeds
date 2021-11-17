function getSum(arr1, arr2) {
    let sum = 0; // change it to let

    for (let i = 0; i < arr1.length; i++) { // Cannot read properties of undefined (reading 'length')
        sum += arr1[i]; // sum is const you can't change 
    }
    for (let j = 0; j < arr2.length; j++) { // it's working like this but it better to change i to j or whatever you want
        sum += arr2[j];
    }
    console.log(sum);
}
getSum([1, 2, 3], [5, 66, 23]); // comma is missing