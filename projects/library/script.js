import { Book } from "./Book.js"

function ShowProperties(obj) {
    console.log(obj.name+'\n'+ obj.author+'\n'+obj.pages+'\n'+obj.read)
};

const libraryContent = [];

// 
// book constructor

function addBookOnLibrary(name, author, pages, read){
    const newBook = new Book(name, author, pages, read);
    libraryContent.push(newBook);
}

addBookOnLibrary("The Hobbit", "J. R. R. Tolkien", 295, true);
addBookOnLibrary("Zen e A arte da Manutenção de Motocicletas", "Robert M. Pirsig", 316, true);
addBookOnLibrary("The Lord of The Rings", "Robert M. Pirsig", 316, true);

console.log(libraryContent[2].pages);

// ShowProperties(libraryContent[2])
