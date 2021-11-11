const ArrayToObject = (string) => {
    const count = {};
    string.toString().toLowerCase().split('').forEach((char) => {
        if (count[char]) {
            return count[char]++;
        }
        else {
            return count[char] = 1;
        }
    });
    return count;
} // another way but there is a problem with commas

const ArrayToObject1 = (arr) => {
    const count = {};
    let max = { l: '', count: 0 };
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const char = arr[i][j].toLowerCase();
            if (char !== " ") {
                if (count[char]) {
                    count[char]++;
                }
                else {
                    count[char] = 1;
                }
                if (max[char] > max.count) {
                    max.l = char;
                    max.count++;
                }
            }
        }
    }
    return count;
};


console.log(ArrayToObject1(["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"]));
console.log(ArrayToObject(["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"]));

// console.log(ArrayToObject1(max));