function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter++; // using vs debugger watch the counter is return 0 all the time so I figure out it's not adding the occurrences change counter +1 to counter++
        }
    }
    return counter;
}
console.log(countOccurrences("ini mini miny moe", "n"));