function book(bookName, bookAuthor, bookPages) {
    this.name = bookName,
    this.author = bookAuthor,
    this.pages = bookPages
};

book.prototype.info = function() { 
    return `${this.name} by ${this.author} actualy have ${this.pages} pages.`;
}


// const tempName = this.name;
//     function capitalize (aString) {
//         const toArray = aString.toLowerCase().split(" ");
        
//         for(i = 1; i < toArray.length; i++){
//             toArray[i] =  toArray[i].charAt(0).toUpperCase() + toArray[i].slice(1);
//         }
//         const capitalized = toArray.join(" ");
//         return capitalized;
//     }
//     const punctRemove = /[^A-Za-z]/g;
//     const propertyName = capitalize(tempName).replace(punctRemove, "");

const oHotdogGostoso = new book("O hotdog gostoso", "Eu mermo", 300);

console.log(oHotdogGostoso.info());