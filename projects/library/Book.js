export class Book {

    // setting restrict keys
    #read;

    constructor(name, author, pages, read){
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.#read = read;
    };

    // change read value
    toggleRead(){
        this.#read = (this.#read !== true);
    };

    // Getting values of object keys
    // get name(){ return this.#name; }
    // get author(){ return this.#author; }
    // get pages(){ return this.#pages; }
    get read(){ return this.#read; }
    
};  
