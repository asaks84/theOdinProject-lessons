import { Book } from "./Book.js"

function ShowProperties(obj) {
    return (obj.name+'\n'+ obj.author+'\n'+obj.pages+'\n'+obj.read)
};

let libraryContent = [];

// Array functions
function addToLibrary(name, author, pages, read){
    const newBook = new Book(name, author, pages, read);
    libraryContent.push(newBook);
};

function removeFromLibrary(toRemove){
    libraryContent.splice(toRemove,1);
};

// odering
function orderBooks(param){
   libraryContent.sort((first,second) => first[param] < second[param] ? -1 : 1);
};

// Tests
addToLibrary("The Hobbit", "J. R. R. Tolkien", 295, true);
addToLibrary("Zen", "Robert M. Pirsig", 316, true);
addToLibrary("TLOTR", "J. R. R. Tolkien", 316, true);

console.log("Original Library ", libraryContent);
console.log("")
console.log("")
orderBooks('author');
console.log("Reordered Library ", libraryContent);