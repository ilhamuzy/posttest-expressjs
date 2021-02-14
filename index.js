const express = require('express')
const app = express()

const booksRouter = require('./router/books')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', booksRouter);

app.listen(3000,()=> {
    console.log('Server nyala !')
});

