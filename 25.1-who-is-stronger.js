// 1. What is wrong with the code? explain in your own words
// the problem that we are using this in different function and after that call so to solve this issue we should use bind method 
// 2. Fix the code so that invoking the whoIsStronger function 
// will print "I am stronger". 
// to fix it we need to use bind 

const hero = {
    health: 5,
    power: 68,
    getStrength: function(){
    if (this.health <= 5){
    return this.power - 10;
    } else return this.power;
    }
   }
   function whoIsStronger(getStrength){
    const myStrength = 82;
    if (getStrength() < myStrength){
    return "I am stronger";
    } else return "You are stronger";
   }

   const strong = hero.getStrength
   const stronger = whoIsStronger(strong.bind(hero))

   console.log(stronger);
   