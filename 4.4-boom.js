const boom = (n) => {
    for (let i = 1; i <= n; i++) {
        let num = i;
        // num.includes(7)
        if (num % 7 == 0 && num == 7) {
            num = 'BOOM-BOOM';
        }
        else if (num % 7 == 0) {
            num = 'BOOM'
        }
        console.log(num);
    }
}

boom(21);