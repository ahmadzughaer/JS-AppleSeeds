const nestedLoop = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log('Neighbour: '+arr[i][j]);
        }
    }
    return true ;
}

const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"]
];

console.log(nestedLoop(listOfNeighbours));

