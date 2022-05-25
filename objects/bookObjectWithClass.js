//class here is just a notation for a clean syntax of a constructor function
class book {
    constructor(name, author, pages){
        this.name = name;
        this.author = author;
        this.pages = pages;
    };
    // separated of the objects, use the methods, like setting a prototype manually
    info(){
        return `${this.name} by ${this.author} actualy have ${this.pages} pages.`;
    };
};

const theHobbit = new book("The Hobbit", "J. R. R. Tolkien", 295);
const theLOFTR = new book("The Lord of The RIngs", "J. R. R. Tolkien", 316);

console.log(theHobbit.info());
console.log(theLOFTR.info());