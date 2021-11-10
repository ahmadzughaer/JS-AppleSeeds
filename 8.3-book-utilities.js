
let book1 = { name: 'the secret', author: 'Rhonda Byrne ', year: 2006, rating: 4.5 };
let book2 = { name: 'the idiot', author: 'Fyodor Dostoevsky', year: 1869, rating: 4.2 };
const bookUtils = {};

bookUtils.getFirstPublished =  (book1, book2) => {
    if (book1.year < book2.year) {
        return book1;
    } else {
        return book2;
    }
};

bookUtils.setNewEdition =  (book, yearOfEdition) => {
    book.latestEdition = yearOfEdition;
    return book;
};

bookUtils.setLanguage =  (book, language) => {
    book.language = language;
    return book;
};

bookUtils.setTranslator =  (book, translator) => {
    book.translator = translator;
    return book;
};

bookUtils.setPublisher =  (book, publisher) => {
    book.publisher = publisher;
    return book;
};

bookUtils.isSamePublisher =  (book1, book2) => {
    let samePublisher = false;
    if (book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location) {
        samePublisher = true;
    }
    return samePublisher;
};

bookUtils.setNewEdition(book1, 2011);
bookUtils.setNewEdition(book2, 2010);

bookUtils.setLanguage(book1, "English");
bookUtils.setLanguage(book2, "Russain");

bookUtils.setTranslator(book1, {translator: "someOne",language: "Hebrew"});
bookUtils.setTranslator(book2, { translator: "newOne", language: "Arabic" });

bookUtils.setPublisher(book1, { name: "MrBooks", location: "Canada" });
bookUtils.setPublisher(book2, { name: "test", location: "Eygpt" });

console.log(bookUtils.getFirstPublished(book1, book2));
console.log(bookUtils.isSamePublisher(book1, book2));

console.log('-'.repeat(30)+'Book1'+'-'.repeat(30))
console.log(book1);
console.log('-'.repeat(30)+'Book2'+'-'.repeat(30))
console.log(book2);