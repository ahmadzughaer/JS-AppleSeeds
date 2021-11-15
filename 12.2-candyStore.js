const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

const getCandy = (obj, candyId) => { // get candy details by id
    let candy = obj.candies;
    let candyDetails = candy.filter(el => el.id === candyId);
    return candyDetails;
}

const getPrice = (obj, candyId) => { // get candy price by passing id
    let candy = obj.candies;
    candy.map((el) => {
        if (el.id === candyId) {
            console.log(el.price);
        }
    });
}

const addCandy = (obj, id, name, price) => { // add new candy to the data
    let candy = obj.candies;
    let newCandy = {
        name: name,
        id: id,
        price: price,
        amount: 1
    }
    candy.push(newCandy);
}

const buy = (obj, id) => { // buy candy by adding price to cash and subtract the amount 
    let price = 0;
    let candy = obj.candies;
    candy.map((el) => {
        if (el.id === id) {
            let inventory = el.amount;
            price = el.price;
            console.log('remaining amount: ' + (inventory - 1));
        }
    });
    let total = obj.cashRegister + price;
    console.log('total cash: '+total);
}

console.log(getCandy(candyStore, '5hd7y'))
getPrice(candyStore, '5hd7y');
addCandy(candyStore, 's4red', 'M&M', 3);
console.log(candyStore);
buy(candyStore, 's4red');



