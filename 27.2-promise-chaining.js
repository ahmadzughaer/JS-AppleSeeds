const arr = ['hey', 'apple', 'orange']
const arr1 = ['hey', 'apple', 'orange', 6]


const isString = new Promise((resolve, reject) => {
    // makeAllCaps(arr)
    // sortWords(arr)
    makeAllCaps(arr1)
    sortWords(arr1)
    function makeAllCaps(arr) {
        let check = arr.some((el) => {
            if (typeof el === 'number') {
                return true
            } else {
                return false
            }
        })
        if (check === true) {
            reject();
        } else if (check === false) {
            arr.map((el) => {
                console.log(el.toUpperCase())
                resolve();
            })
        }
    }

    function sortWords(arr) {
        let check = arr.some((el) => {
            if (typeof el === 'number') {
                return true
            } else {
                return false
            }
        })
        if (check === true) {
            reject();
        } else if (check === false) {
            arr.sort()
            arr.map((el) => {
                console.log(el)
                resolve();
            })
            resolve();
        }
    }

})
isString.then(() => {
    console.log('is a string')
})
isString.catch(() => {
    console.error('error');
})