function date() {
    let myDate = new Date();
    let day = myDate.toLocaleString('en-us', { weekday: 'long' });
    let monthName = myDate.toLocaleString('default', { month: 'long' });
    let monthDay = myDate.getDate();
    let year = myDate.getUTCFullYear();

    let todayDate = 'Today is ' + day + ' the ' + monthDay + ' of ' + monthName + ', ' + year;
    return todayDate;

}
console.log(date());