const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const foods1 = ["Falafel", "Sabich", "hummus", "pizza with extra pineapple"];
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

console.log(foods.sort());
console.log(foods.sort((a, b) => {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    }
    return 0;
}));


let sorted = foods1.sort((a, b) => a.localeCompare(b))
console.log(sorted);


console.log(words.sort((a, b) => {
    if (a.length > b.length) {
        return -1;
    } else if (a.length < b.length) {
        return 1;
    }
    return 0;
}))