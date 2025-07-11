// app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data in request bodies
app.use(express.json());

// In-memory "databases"
let users = [
    { id: 1, name: 'Shrilakshmi' },
    { id: 2, name: 'Sudeep' },
];

let orders = [
    { id: 1, item: 'Laptop' },
    { id: 2, item: 'Phone' },
];

// GET all users
app.get('/users', (req, res) => {
    res.send("Here is the list of all users.");
});

// POST to add a new user
app.post('/users', (req, res) => {
    // You can optionally store this in array like you're doing above
    res.send("A new user has been added.");
});

// GET all orders
app.get('/orders', (req, res) => {
    res.send("Here is the list of all orders.");
});

// POST to create a new order
app.post('/orders', (req, res) => {
    res.send("A new order has been created.");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
