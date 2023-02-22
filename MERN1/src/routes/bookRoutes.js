const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController.js');

// for getting all books
router.get('/', bookController.getBooks);

// for book with id
router.get('/:id',bookController.getBookById);

// for storing books in database
router.post('/', bookController.saveBook);

// For updating previous books
router.put('/:id',bookController.updateBook);

// For removing saved books
router.delete('/:id', bookController.deleteBook);

module.exports = router;