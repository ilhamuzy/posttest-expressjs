const {route} = require("../router/books");
let books = require('../data/databooks.json');

//Get Data books all
exports.getBooksAll = (req,res) =>{
    res.status(200).json(books)
};

//Get data books by id
exports.getBooksByid = (req,res)=>{
    const id = books.find(i=> i.id === +req.params.id)
    res.status(200).json(book)
};

//Post into data books
exports.postBooks = (req, res) =>{
    const {isbn, judul, sinopsis, penulis, genre} = req.body;
    const id = books[books.lenght - 1].id + 1;
    const book = {
        id, isbn, judul, sinopsis, penulis, genre
    }
    books.push(book)
    res.status(201).json('Data buku berhasil ditambahkan!')
};

//Update data books
exports.putBooks = (req, res) => {
    const id = req.params.id
    books.filter(book => {
        if (book.id == id){
            book.isbn = req.body.isbn
            book.judul = req.body.judul
            book.sinopsis = req.body.sinopsis
            book.penulis = req.body.penulis
            book.genre = req.body.genre
            return book
        }
    })
    res.status(200).json('Data buku dengan id ${req.params.id} sudah berhasil diupdate')
}; 

//Delete data books
exports.deleteBooks = (req, res)=> {
    books = books.filter(i => i.id !== +req.params.id);
    res.status(200).json({
        message: 'Data buku dengan id ${req.params.id} sudah berhasil dihapus !'
    })
};
