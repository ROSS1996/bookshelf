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

new addBook("Don Quixote", 1077, true)
new addBook("A Tale of Two Cities", 448, false)
new addBook("The Lord of the Rings", 1137, false)


const addButton = document.getElementById('addBook');
addButton.addEventListener("click", function () {
    const bookTitle = document.getElementById('title').value
    const bookPages = document.getElementById('pages').value
    const bookReadCheck = document.getElementById('read')
    let bookRead = false
    if (bookReadCheck.checked) {
        bookRead = true;
    }
    new addBook(bookTitle, bookPages, bookRead);
    insertBookDOM(bookTitle, bookPages, bookRead);
    logArray(myBooks);
})


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

function logArray (array) {
    books = array;
    for (const book of books) {
        console.log(book.info());
    }
}

showBooks(myBooks)