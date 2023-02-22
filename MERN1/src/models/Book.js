const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    id:Number,
    name:String,
    publishedDate:Date,
    author:String
})

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;