const nestedLoop2 = (arr1, arr2) => {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }
    for (let j = 0; j < arr2.length; j++) {
        newArr.push(arr2[j]);
    }

    let duplicated = newArr.filter((value, index) => newArr.indexOf(value) !== index);
    if (duplicated.length === 0) {
        return false;
    } else {
        return duplicated;
    }


}


const food = ["Noodle", "Pasta", "Meat",
    "Cucumber"];


const food1 = ["Fries", "Pasta", "Hamburgers"];
console.log(nestedLoop2(food, food1));

