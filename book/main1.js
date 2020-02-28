const Store = () => {
    if (localStorage.getItem('books')) {
        return JSON.parse(localStorage.getItem('books'));
    } else {
        return [];
    }
}

class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
    }
  }

const books = Store(); 

document.getElementById('book-form').addEventListener('submit', getBook);
document.addEventListener('DOMContentLoaded', displayBook);
document.querySelector('#book-list').addEventListener('click', removeBook);

function displayBook() {
    books.map(book => displayBooks(book));
}

function displayBooks(book) {
    const list = document.querySelector('#book-list');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`
    list.appendChild(tr);
}

function getBook(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let isbn = document.getElementById('isbn').value;
    books.push(new Book(title, author, isbn));
    localStorage.setItem('books', JSON.stringify(books));
    books.map(book => displayBooks(book));
    document.getElementById('title').value = "";
}

function removeBook(e) {
if(e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
}
}
