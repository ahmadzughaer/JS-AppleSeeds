function circleArea(radius) {
    let area = Math.PI*(radius*radius);
    return area ;
} 


console.log(circleArea(16));
let num = 16;
console.log(+circleArea(num).toFixed(2)); // it return string 




// function roundToTwo(num) {    
//     return +(Math.round(num + "e+2")  + "e-2");
// }

// console.log(roundToTwo(123.4656)); 
