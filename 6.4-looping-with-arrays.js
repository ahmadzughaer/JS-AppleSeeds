
const percentageOfWorld2 = (population) => ((population / 7900)*100).toFixed(1)+"%";

const populationPercentages = (populations) => {

let percentages =[]; 
for(let i = 0; i <= populations.length-1; i++) {
let percentNum = percentageOfWorld2(populations[i]);
percentages.push(percentNum);
}
console.log(percentages)
} 
let populations = [100, 50, 20, 60];

populationPercentages(populations);