function percentageOfWorld1 (population) {
let percentage = (population / 7900)*100;
return percentage.toFixed(1)+"%";
}
console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld1(100));


const percentageOfWorld2 = (population) => ((population / 7900)*100).toFixed(1)+"%";
console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld2(100));