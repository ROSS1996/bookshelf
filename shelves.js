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
    // Card
    const bookObject = document.createElement("div");
    bookObject.id = title
    bookObject.classList.add('card')
    if (read == true) { bookObject.classList.toggle("card-read"); }
    // Book title
    const bookObjectTitle = document.createElement("h3");
    bookObjectTitle.innerText = title
    // Book pages
    const bookObjectPages = document.createElement("p");
    bookObjectPages.innerText = `Pages: ${pages}`
    // Book read
    const bookObjectRead = document.createElement("p");
    bookObjectRead.innerText = `Read: ${read}`
    // Book button
    const bookObjectRemoveBtn = document.createElement("button");
    bookObjectRemoveBtn.innerText = 'Remove';
    bookObjectRemoveBtn.addEventListener('click', function(){
        let parent = this.parentElement
        removeBook(parent);
    })
    // Populate div
    bookObject.appendChild(bookObjectTitle);
    bookObject.appendChild(bookObjectPages);
    bookObject.appendChild(bookObjectRead);
    bookObject.appendChild(bookObjectRemoveBtn);
    // Add requirements to DOM
    booksLista.appendChild(bookObject);
}

function removeBook (parent) {
    bookTitle = parent.children[0].innerText
    bookIndex = myBooks.findIndex(i => i.title === bookTitle);
    parent.remove()
    myBooks.splice(bookIndex, 1);
    for (const book of myBooks) {
        console.log(book.info());
    }
}

function logArray (array) {
    books = array;
    for (const book of books) {
        console.log(book.info());
    }
}

showBooks(myBooks)