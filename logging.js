//SERVER WITH MIDDLEWARE
const express = require('express');
const app = express();

// Middleware to parse incoming JSON (optional but good)
app.use(express.json());

// 🔹 Custom Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next(); // Pass control to the next middleware/route
});

// 🔹 Endpoints

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

// Start server on port 4000
app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
