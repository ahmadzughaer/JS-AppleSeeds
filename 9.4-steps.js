

const steps = (num) => {
    for (let i = 0; i < num; i++) {
        let newStr = "";
        for (let j = 0; j < num; j++) {
            j <= i ? newStr += '#' : newStr += '-';
        }
        console.log(newStr);
    }

}

steps(10);

