// book constructor

function Book(title, author, isbn) {


    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// ui constructor
function UI(){

}

UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
        `;

        list.appendChild(row);
}

// show alert

UI.prototype.showAlert = function(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parentElement
    const container = document.querySelector('.container');

    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
}

// delete book
UI.prototype.deleteBook  = function(target){
    if(target.className=== 'delete'){
        target.parentElement.parentElement.remove();
    }
}


UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}
// event loadEventListerners

document.getElementById('book-form').addEventListener('submit', function(e){

    const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;

            console.log(title, author, isbn);

            // instantiate book 
    const book = new Book(title, author, isbn);

    // iinstantiate UI
    const ui = new UI();

    // validate the book

    if (title === '' || author === '' || isbn === ''){
        ui.showAlert('Please fill in all required fields','error')
    }else{

        ui.addBookToList(book);

        // show alert

        ui.showAlert('Book added', 'success')

        // clear fields 
    
        ui.clearFields();
    }

    e.preventDefault()
});

// event listerner for delete book

document.getElementById('book-list').addEventListener('click',function(e) {

    const ui = new  UI();

    ui.deleteBook(e.target);

    ui.showAlert('Book deleted successfully', 'success')

    e.preventDefault();
})