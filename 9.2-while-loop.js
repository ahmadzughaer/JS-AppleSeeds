const stringLength = (arr) => {
    let arr2 = []
    let i = 0;
    while (i < arr.length) {
        let string = arr[i].length;
        arr2.push(string)
        i++;
    }
    console.log(arr2);
}

stringLength(['hey', 'you', 'test', 'communication']);