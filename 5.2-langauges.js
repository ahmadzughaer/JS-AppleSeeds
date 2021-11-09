const mostSpeakingLang = (language) => {
    switch (language) {
        case 'mandaring':
        case 'Mandarin':
            console.log('MOST number of native speakers!');
            break;
        case 'spanish':
        case 'Spanish':
            console.log('2nd place in number of native speakers');
            break;
        case 'english':
        case 'English':
            console.log('3rd place in number of native speakers');
            break;
        case 'hindi':
        case 'Hindi':
            console.log('4th place in number of native speakers');
            break;
        case 'arabic':
        case 'Arabic':
            console.log('5th place in number of native speakers');
            break;
        default:
            console.log('Not in the top 5');
    }

}

mostSpeakingLang('hindi');
mostSpeakingLang('Hindi');
mostSpeakingLang('french');