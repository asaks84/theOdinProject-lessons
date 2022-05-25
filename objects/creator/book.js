// debugger
function ShowProperties(obj) {
    for (const prop in obj) {
        console.log(prop + ": " + obj[prop] + "\n");
    };
};

// object prototype
const nBook = {
  read: false
};

function bla(){
  console.log("blah");
};

// constructor function
function book(bookName, bookAuthor, bookPages) {
    this.name = bookName;
    this.author = bookAuthor;
    this.pages = bookPages; 
};

// setting a new method to book constructor
book.prototype.info = function () {
    return `${this.name} by ${this.author} actualy have ${this.pages} pages.`;
};

const oHotdogGostoso = new book("O hotdog gostoso", "Eu mermo", 300);

// Já entendi uma diferença entre os 2 Object.create,
// o primeiro usa um objeto (book) q n existe
// o segundo usa a função construtora book, mesmo sem alimentar 
// com parâmetros
const theHobbit = Object.create(book);
const newBook = Object.create(book.prototype);
// esse usa um objeto definido (nBook)
const newBook2 = Object.create(nBook);


// Por que 'name' não pode ser criado?
theHobbit.name = "The Hobbit";
theHobbit.author = "J. R. R. Tolkien";
theHobbit['pages'] = 295;

console.log("Debug do The Hobbit");
ShowProperties(theHobbit);

/*
console.log("Debug do O hotdog gostoso");
ShowProperties(oHotdogGostoso);
console.log(" ");

console.log("A função book é prototype do O Hotdog Gostoso? ", book.prototype.isPrototypeOf(oHotdogGostoso));
console.log("A função book é prototype do Hobbit? ", book.prototype.isPrototypeOf(theHobbit));
console.log(" ");

console.log("O book(objeto não definido) é prototype do Hobbit? ", book.isPrototypeOf(theHobbit));
console.log("O book(objeto definido) é prototype do newBook2? ", nBook.isPrototypeOf(newBook2));
console.log("A construtora book é prototype do newBook? ", book.prototype.isPrototypeOf(newBook));
console.log(" ");

ShowProperties(newBook);
ShowProperties(newBook2);
*/