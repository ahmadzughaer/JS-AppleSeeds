
let cities = [
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 },
    { name: 'Chicago', population: 2695598 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1526006 }
];

Array.prototype.myFilter = function (func) {
    const filterArr = [];

    for (let i = 0; i < this.length; i++) {
        if (func(this[i])) {
            filterArr.push(this[i]);
        }
    }

    return filterArr;
};

const myMethodArr = cities.myFilter(function (el) {
    if (el.population > 3000000) return el;
});


Array.prototype.myFind = function (func) {
    let myFind;
    for (let i = 0; i < this.length; i++) {
        if (func(this[i])) {
            myFind =this[i];
        }
    }

    return myFind;
};

const myMethodArr2 = cities.myFind(function (el) {
    if (el.population === 8175133) return el;
});

console.log(myMethodArr);
console.log(myMethodArr2);