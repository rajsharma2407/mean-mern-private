const Book = require('../models/Book');

const getBooks = async () => {
    const books = await Book.find();
    return books;
}

const getBookById = async (id) =>{
    const book = await Book.findOne({id:id});
    return book;
}

const saveBook = async (book) =>{
    const findBook = await getBookById(book.id);
    if(findBook) {
        console.log("Exists");
        return "Book already exists";
    }   
    const newBook = new Book(book);
    newBook.save((err)=>{
        if(err){
            console.log(err);
        }else{
            return "Book Saved";
        }
    });
    return "Error"
}

const updateBook = async (id, book) =>{
    const findBook = getBookById(id);
    if(!findBook) return "Invalid Id";
    await Book.findOneAndUpdate({id:id}, book );
    return "Book updated"
}

const deleteBook = async (id) =>{
    await Book.findOneAndDelete({id:id});
    return "Book removed";
}

module.exports = {getBooks, getBookById, saveBook, updateBook, deleteBook}