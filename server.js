const express = require('express');
const app = express();

// Middleware to parse JSON (optional, but good practice)
app.use(express.json());

// Routes

// Products
app.get('/products', (req, res) => {
  res.send("Here is the list of all products.");
});

app.post('/products', (req, res) => {
  res.send("A new product has been added.");
});

// Categories
app.get('/categories', (req, res) => {
  res.send("Here is the list of all categories.");
});

app.post('/categories', (req, res) => {
  res.send("A new category has been created.");
});

// Wildcard Route (Handles all undefined routes)
app.use( (req, res) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Server Listen on Port 4000
app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
