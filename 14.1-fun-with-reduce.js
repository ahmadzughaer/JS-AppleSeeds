max = (arr) => {
    return arr.reduce((maxArr, val) => {
        maxArr[0] = (maxArr[0] === undefined || val > maxArr[0]) ? val : maxArr[0]
        return maxArr;
    }, []);
}

const sumEven = (arr) => {
    const even = arr.reduce((num, value) => {
        return value % 2 === 0 ? num + value : num
    }, 0);
    return even;
}

average = (arr) => {
    const avg  = arr.reduce((first, last) => {
        return first + last;
    })/arr.length;
    return avg;
}



console.log(max([2, 0, 4, 5, 10]));
console.log(average([2, 4, 5, 10]));
console.log(sumEven([2, 4, 5, 10]));