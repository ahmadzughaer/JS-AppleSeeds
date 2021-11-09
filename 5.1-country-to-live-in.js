const countryToLiveIn = (language, isIsland, population, country) => {
    if ((language == 'english' || language == 'English') && population < 50 && isIsland == false) {
        console.log('You should live in ' + country + '. ');
    } else {
        console.log(country + ' does not meet your criteria!');
    }
}

countryToLiveIn('English', true, 20, 'NewZeland');
countryToLiveIn('english', false, 200, 'USA');
countryToLiveIn('english', false, 6, 'Finland');
