const express = require('express');
const app = express();
const booksRouter = require('./routes/books');

app.use(express.json()); // To parse JSON bodies

app.use('/books', booksRouter); // Mount the router on /books

app.listen(3000, () => {
  console.log('Library server is running on http://localhost:3000');
});
