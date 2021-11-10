let book = {name: 'the secret', author: 'Rhonda Byrne ', year: 2006, rating: 4.5}

const bookPublisher = (book) => {
    let bookName = book.name;
    let authorName = book.author;
    let publishedYear = book.year;
    console.log('The book '+bookName+' was written by '+ authorName + 'in the year '+ publishedYear);
}

bookPublisher(book);