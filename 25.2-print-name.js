const person = {
    name: 'ahmad',
    printName: function () {
        console.log(this.name) 
    },
    printNameWithDelay: function () {
        setTimeout(this.printName.bind(person), 1000)
    }
}
person.printName()
person.printNameWithDelay()