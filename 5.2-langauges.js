const mostSpeakingLang = (language) => {
    switch (language) {
        case 'mandaring' || 'Mandarin':
            console.log('MOST number of native speakers!');
            break;
        case 'spanish' || 'Spanish':
            console.log('2nd place in number of native speakers');
            break;
        case 'english' || 'English':
            console.log('3rd place in number of native speakers');
            break;
        case 'hindi' || 'Hindi':
            console.log('4th place in number of native speakers');
            break;
        case 'arabic' || 'Arabic':
            console.log('5th place in number of native speakers');
            break;
        default:
            console.log('Not in the top 5');
    }

}

mostSpeakingLang('hindi');
mostSpeakingLang('french');