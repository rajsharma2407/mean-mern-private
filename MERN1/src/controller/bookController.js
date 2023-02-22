const bookService = require('../services/bookService');

const getBooks = (req, res) =>{
    res.send(bookService.getBooks());
}
const getBookById = async (req, res) =>{
    const id = req.params.id;
    const book = await bookService.getBookById(id);
    console.log(book)
    res.send(book);
}
const saveBook = (req, res) =>{
    const book = req.body;
    res.send(bookService.saveBook(book));
}

const updateBook = (req, res) =>{
    const book = req.body;
    const id = req.params.id;
    return res.send(bookService.updateBook(id, book));
}
const deleteBook = (req, res) =>{
    const id = req.params.id;
    res.send(bookService.deleteBook(id));
}


module.exports = {getBooks, saveBook, updateBook, deleteBook, getBookById};