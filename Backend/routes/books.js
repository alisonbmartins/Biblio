const express = require('express');
const router = express.Router();

// O caminho precisa bater exatamente com o arquivo
const bookController = require('../controllers/book');

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.addBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
