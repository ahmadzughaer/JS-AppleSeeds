// const iteratePeople =() => {
const people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i <= people.length - 1; i++) {
    console.log(people[i]);
}

console.log('-'.repeat(30));
people.shift();
people.pop();
people.unshift('Matt');
people.push('Ahmad');
console.log(people);
console.log('-'.repeat(30)); 
for (let i = 0; i <= people.length - 1; i++) {
    console.log(people[i]);

    if (people[i] == 'Mary') {
        break;
    }
}
console.log('-'.repeat(30)); 
console.log(people.slice(1)); 
console.log('-'.repeat(30)); 
console.log(people.indexOf('Mary')); 
console.log('-'.repeat(30)); 
console.log(people.indexOf('Foo')); 
const newPeople = people;
console.log(newPeople.splice(2, 1, 'Eliz'));
console.log(newPeople.splice(3, 0, 'Greg'));

console.log(newPeople);

let withBob = 'bob';
console.log(newPeople.concat(withBob))





// }

// iteratePeople();
