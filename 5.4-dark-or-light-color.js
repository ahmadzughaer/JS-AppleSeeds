const darkOrLight = (color) => {
    color = color.toLowerCase();
    switch (color) {
        case 'yellow':
        case 'pink':
        case 'orange':
            console.log('light color');
            break
        case 'blue':
        case 'purple':
        case 'brown':
            console.log('dark color');
            break;
        default:
            console.log('unknown color');
    }
}

darkOrLight('red');
darkOrLight('Purple');
darkOrLight('pink');

