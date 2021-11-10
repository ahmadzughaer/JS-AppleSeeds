

const myCountry = {  
    country: 'Italy', capital: 'Rome', population: 70, language: 'Italian' ,neighbours: [],
describe() {
return this.country + ' has '+ this.population + ' Millions people, their mother tongue is '+ this.language+ ' they have '+this.neighbours.length + ' neighbouring countries and a capital called ' + this.capital + ' is it an island? '+ this.isIsland}
, 
checkIsland(){ 
    this.isIsland = this.neighbours.length === 0;
} 

};
myCountry.checkIsland();
console.log(myCountry.describe());
