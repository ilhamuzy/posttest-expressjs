const express = require('express');
const router = express.Router();

const { getBooksAll, getBooksByid, postBooks, putBooks, deleteBooks} = require('../controller/controllerbooks');

router.get('/books', getBooksAll);
router.get('/books/:id', getBooksByid);
router.post('/books', postBooks);
router.put('/books/:id', putBooks);
router.delete('/books/:id', deleteBooks);

module.exports = router;