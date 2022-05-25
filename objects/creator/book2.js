// Show all properties of an object
function ShowProperties(obj) {
    for (const prop in obj) {
        console.log(prop + ": " + obj[prop] + "\n");
    };
};

// an object with functions create new objects
const bla = {
    sayNothing() {
        console.log("bla!")
    }
}

// another type of object constructor
// using bla with prototype
function nBook(value) {
    
    //setting a new object and the prototype is the object bla
    const minibook = Object.create(bla);
    
    // don't use this, because we need to set 
    // the properties of minibook, not nBook.
    // also, using 'this' will transform this function into an object.
    minibook.read = false;
    minibook.value = value;

    // wthiout return, it can't instace new objects
    return minibook;
    // and no needed use 'new'.
};

// esse modelo usa a bla como prototype e a nBook para construir
// não me parece ser o melhor modelo de construção
const newBook2 = nBook('a');

console.log("A construtura nBook é prototype do newBook2? ", nBook.prototype.isPrototypeOf(newBook2));
console.log("O objeto bla é o prototype do newBook2? ", bla.isPrototypeOf(newBook2));
console.log("Properties of newBook 2")
ShowProperties(newBook2);