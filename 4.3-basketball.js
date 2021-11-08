let johnTeam = [97, 132, 105];
let mikeTeam = [97, 134, 105];
let maryTeam = [97, 132, 105];
const average = (array) => array.reduce((a, b) => a + b) / array.length; ;

let johnTeamAvg = average(johnTeam);
let mikeTeamAvg = average(mikeTeam);
let maryTeamAvg = average(maryTeam);

const checkWinner = () => {
    if(johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg) {
        console.log('John Team are the winners')
    }
    else if( mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg) {
        console.log('Mike Team are the winners')
    }
    else if(maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg) {
        console.log('Mary Team are the winners')
    }
    else if(maryTeamAvg == johnTeamAvg && maryTeamAvg > mikeTeamAvg) {
        console.log('Mary & John Teams are the winners')
    }

    else if(maryTeamAvg == mikeTeamAvg && mikeTeamAvg > johnTeamAvg  ) {
        console.log('Mary & Mike Teams are the winners')
    }

    else if(johnTeamAvg == mikeTeamAvg && johnTeamAvg > maryTeamAvg  ) {
        console.log('John & Mike Teams are the winners')
    }
    else {
        console.log('All teams are winners')

    }
}
console.log(johnTeamAvg);
console.log(mikeTeamAvg);
console.log(maryTeamAvg);
console.log(checkWinner()); 