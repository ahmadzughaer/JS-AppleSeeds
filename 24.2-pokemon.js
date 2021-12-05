function Pokemon(pokemonName, pokemonType, pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
  
    }

    Pokemon.prototype.callPokemon = function (){
        return `I choose you, ${this.name}`
    }

    Pokemon.prototype.attack = function (number){
        if (number < 3) {
        return `${this.name} used ${this.attackList[number]}`
    } else {
        return 'no such attack try again'
    }
    }
   let pikachu = new Pokemon('Pikachu', 'Electric', ['Electric Shock', 'Electric Dance', 'Electric Punch'])
   let charmander = new Pokemon('Charmander', 'Fire', ['Fire Storm', 'Fire on the hole', 'Fire Fire'])
   let squirtle = new Pokemon('Squirtle', 'Water', ['Water Canon', 'Water Dance', 'Water Punch'])


    console.log(pikachu.callPokemon())
    console.log(squirtle.callPokemon())
    console.log(charmander.callPokemon())
    console.log(squirtle.attack(3))
    console.log(charmander.attack(2))
    console.log(pikachu.attack(1))