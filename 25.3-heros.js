const wonderWoman = {
    name: "Diana Prince"
}
const batman = {
    name: "Bruce Wayne"
}
const superHeroes = [wonderWoman, batman];

function printName() {
    console.log(`my name is ${this.name}`);
}

function printHeroes(heroes, printFunc) {
    // printFunc.call(this, heroes )
    // heroes.forEach(element => {
    //     new printFunc(element) });

    heroes.forEach(heroName => {
        printFunc.bind(heroName)()
    })
}

printHeroes(superHeroes, printName)
