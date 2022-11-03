let myBooks = []

function Book () {
}

function addBook (title, pages, read=false) {
    this.title = title;
    this.pages = pages;
    this.read = read;
    myBooks.push(this)
}

Book.prototype.info = function () {
    return `${this.title}, ${this.pages}. Was it read? ${this.read}`;
}

addBook.prototype = Object.create(Book.prototype);

const novo = new addBook("Teste", 20, false)
const novo2 = new addBook("Teste2", 40, false)
const novo3 = new addBook("Teste3", 50, false)


function showBooks (array) {
    books = array;
    for (const book of books) {
        insertBookDOM(book.title, book.pages, book.read);
    }
}

function insertBookDOM (title, pages, read) {
    const booksLista = document.getElementById('books')
    // Requirements Div
    const bookObject = document.createElement("tr");
    // Book title
    const bookObjectTitle = document.createElement("td");
    bookObjectTitle.innerText = title
    const bookObjectPages = document.createElement("td");
    bookObjectPages.innerText = pages
    const bookObjectRead = document.createElement("td");
    bookObjectRead.innerText = read
    // Populate div
    bookObject.appendChild(bookObjectTitle);
    bookObject.appendChild(bookObjectPages);
    bookObject.appendChild(bookObjectRead);
    // Add requirements to DOM
    booksLista.appendChild(bookObject);
}

showBooks(myBooks)