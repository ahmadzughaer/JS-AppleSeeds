// const random = Math.floor(Math.random()*100)
const isGreaterThanTen = new Promise((resolve, reject) => {
    myfunc(11)
    function myfunc (num) {
        if (num > 10) {
            resolve(); 
       } else {
          
           reject();
       }
    }
   
})
isGreaterThanTen.then (() => {
    console.log( ' greater than 10')
})
isGreaterThanTen.catch(() => {
    console.log(' less than 10')
    })





