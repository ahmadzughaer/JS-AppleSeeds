function date() {
let dateObj = new Date();
let day = dateObj.toLocaleString('en-us', {  weekday: 'long' });
let monthName = dateObj.toLocaleString('default', { month: 'long' });
let month = dateObj.getUTCMonth() + 1;
let year = dateObj.getUTCFullYear();

 const todayDate = 'Today is '+day+ ' the '+ month + ' of '+ monthName+ ', '+ year;
 return todayDate; 

}
console.log(date());