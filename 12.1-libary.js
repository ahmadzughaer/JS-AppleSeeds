var library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];

const readAble =(obj, boolean) => {
let book = obj.filter(el =>  el.readingStatus === boolean)
return book;
}

console.log(readAble(library, true));