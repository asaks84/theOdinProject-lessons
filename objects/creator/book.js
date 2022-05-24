function ShowProperties(obj) {
    for (const prop in obj) {
        console.log(prop + ": " + obj[prop] + "\n");
    };
};

function book(bookName, bookAuthor, bookPages) {
    this.name = bookName,
    this.author = bookAuthor,
    this.pages = bookPages; 
};

book.prototype.info = function () {
    return `${this.name} by ${this.author} actualy have ${this.pages} pages.`;
};

const oHotdogGostoso = new book("O hotdog gostoso", "Eu mermo", 300);
const theHobbit = Object.create(book)

theHobbit.author = "J. R. R. Tolkien";
theHobbit['name'] = 'The Hobbit';
theHobbit['pages'] = 295;

console.log(oHotdogGostoso.info());
// console.log(theHobbit.info());
ShowProperties(theHobbit);