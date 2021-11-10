const  swapObj = (obj) =>{
    let newObj = {};
    for(let value in obj){
        newObj[obj[value]] = value;
    }
    return newObj;
  }

  console.log(swapObj({ name: 'the secret', author: 'Rhonda Byrne ', year: 2006, rating: 4.5 }));