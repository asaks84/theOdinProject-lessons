import { Book } from "./Book.js"

const libraryContent = [];

// Manipulating Library
function addToLibrary(name, author, pages, read){
    const newBook = new Book(name, author, pages, read);
    libraryContent.push(newBook);
};

function removeFromLibrary(toRemove){
    libraryContent.splice(toRemove,1);
};

function reorderBooks(key, order){
    if(order === true){
        libraryContent.sort((first,second) => first[key] < second[key] ? -1 : 1);
    } else { 
        libraryContent.sort((first,second) => first[key] < second[key] ? 1 : -1); 
    };
};

// Tests
addToLibrary("The Hobbit", "J. R. R. Tolkien", 295, true);
addToLibrary("Zen e a Arte da Manutenção de Bicicletas", "Robert M. Pirsig", 316, true);
addToLibrary("TLOTR", "J. R. R. Tolkien", 316, true);

// console.log("Original Library ", libraryContent);
// console.log("");
reorderBooks('author', true);
// console.log("Reordered Library ", libraryContent);