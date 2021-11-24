const boom = (n) => {
    for (let i = 1; i <= n; i++) {
        let num = i;
        if (num % 7 == 0) {
            if (num.toString().includes('7')) {
                num = 'BOOM-BOOM';
            }
            else {
                num = 'BOOM';
            }
        }
        console.log(num);
    }
}

boom(70);

