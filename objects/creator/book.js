// Show all properties of an object
function ShowProperties(obj) {
    for (const prop in obj) {
        console.log(prop + ": " + obj[prop]);
    };
};

// constructor function
function book(bookName, bookAuthor, bookPages) {
    this.name = bookName;
    this.author = bookAuthor;
    this.pages = bookPages;
};
// setting a new method to book constructor
// need to use ".prototype" since the book used here is a contructor function
book.prototype.info = function () {
    return `${this.name} by ${this.author} actualy have ${this.pages} pages.`;
};



const oHotdogGostoso = new book("O hotdog gostoso", "Eu mermo", 300);
/*
    Já entendi uma diferença entre os 2 Object.create,
    O primeiro usa um objeto vazio como prototype.
    O segundo usa a função construtora book, mesmo sem alimentar com parâmetros.
    Nesse caso, o correto era instaciar um objeto com o 'new book' como feito acima
*/
const theHobbit = Object.create({});
const newBook = Object.create(book.prototype);

theHobbit['name'] = "The Hobbit";
theHobbit.author = "J. R. R. Tolkien";
theHobbit['pages'] = 295;

console.log("A função constructor book é prototype do Hobbit? ", book.prototype.isPrototypeOf(theHobbit));
console.log("O Object é prototype do Hobbit? ", Object.isPrototypeOf(theHobbit));
console.log("O Object é o Constructor do Hobbit? ", (theHobbit.constructor == Object));
console.log("Properties of The Hobbit");
ShowProperties(theHobbit);

console.log('');

console.log("A função book é prototype do O Hotdog Gostoso? ", book.prototype.isPrototypeOf(oHotdogGostoso));
console.log("O Object é o Constructor do O Hotdog Gostoso? ", (oHotdogGostoso.constructor == Object));
console.log("A função book é o Constructor do O Hotdog Gostoso? ", (oHotdogGostoso.constructor == book));
console.log("Properties O hotdog gostoso");
ShowProperties(oHotdogGostoso);

console.log(" ");

console.log("A construtora book é prototype do newBook? ", book.prototype.isPrototypeOf(newBook));
console.log("Properties newBook");
ShowProperties(newBook);