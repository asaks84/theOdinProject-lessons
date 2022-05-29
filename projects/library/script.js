import { Book } from "./Book.js"

function ShowProperties(obj) {
    return (obj.name+'\n'+ obj.author+'\n'+obj.pages+'\n'+obj.read)
};

const libraryContent = [];

// Array functions
function addToLibrary(name, author, pages, read){
    const newBook = new Book(name, author, pages, read);
    libraryContent.push(newBook);
};

function removeFromLibrary(toRemove){
    libraryContent.splice(toRemove,1);
};

// Tests
addToLibrary("The Hobbit", "J. R. R. Tolkien", 295, true);
addToLibrary("Zen e A arte da Manutenção de Motocicletas", "Robert M. Pirsig", 316, true);
addToLibrary("The Lord of The Rings", "J. R. R. Tolkien", 316, true);

removeFromLibrary(1);

console.log(libraryContent[1]);