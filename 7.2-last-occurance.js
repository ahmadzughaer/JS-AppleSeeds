//  const lastOcc = string.lastIndexOf('you'); // using indeOf 


//  const lastIndex = (str, char) => {
//  for (let i ; i <= 0 ; i--) {
//  if( str.charAt(i) === char) {
//      return i;
//  }
//  }
//  return -1;
// }

const  lastIndex = (str, word) => {
    // let splitWords = str.split(' ').join('');
    for (let i = str.length; i > -1; i--) {
        if (str.charAt(i) === 'y' && str.charAt(i+1) === 'o' && str.charAt(i+2)=== 'u') {
            return i;
        }
    }
    console.log(splitWords);
    return -1;
}
const str = "The more you know, the more you know that you don't know";
let word = 'you';
console.log(lastIndex(str, word));