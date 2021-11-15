const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

const findName = (obj) => { // section 1
    obj.map((el) => {
        let names = el.name;
        console.log(names);
    })
}

findName(data);

const bornYear = (obj) => { // section 2
    obj.map((el) => {
        let birthDay = el.birthday.split('-');
        let year = parseInt(birthDay[birthDay.length - 1])
        if (year < 1990) {
            console.log(el);
        }
    })
}

bornYear(data);

const foodTyeps = (obj) => { // section 3
    const objs = {};
    const food = [];
    let merged = [];
    obj.forEach((el) => {
        let meat = el.favoriteFoods.meats;
        let fish = el.favoriteFoods.fish;
        food.push(fish);
        food.push(meat);
        merged = food.flat(1);
    });

    merged.forEach((el) => {
        if (objs[el]) {
            return objs[el]++;
        }
        else {
            return objs[el] = 1;
        }
    });
    return objs;
}

console.log(foodTyeps(data));