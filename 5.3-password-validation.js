const passValidator1 = (password) => {
    if (password >= 7) {
        console.log('strong');
    } else {
        console.log('weak');
    }
}


const passValidator2 = (password) => {
    let passTest = (password.length >= 7) ? 'strong' : 'weak';
    console.log(passTest);
}

const passValidator3 = (password) => {
    let passLength = password.length >= 7;
    ('strong' && 'weak')
    console.log(passLength);
}

const advPassValidator = (password) => {
    let isNumber = isNaN(password);
    return password.length >= 7 && isNumber === true ? console.log('Very Strong') :
    password.length >= 7 ? console.log('Strong') : 
    console.log('Weak');
}


passValidator1('dad');
passValidator2('dadfdfdfdfdf');
passValidator3('dad');
advPassValidator('dgfg5');

