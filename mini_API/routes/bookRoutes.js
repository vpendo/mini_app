const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// GET /api/books - get all books
router.get('/', bookController.getBooks);

// GET /api/books/:id - get a single book by ID
router.get('/:id', bookController.getBookById);

// POST /api/books - create a new book
router.post('/', bookController.createBook);

// PUT /api/books/:id - update a book by ID
router.put('/:id', bookController.updateBook);

// DELETE /api/books/:id - delete a book by ID
router.delete('/:id', bookController.deleteBook);

module.exports = router; 