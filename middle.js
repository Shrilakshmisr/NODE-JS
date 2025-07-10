const express = require('express');
const app = express();

//  Custom Middleware to add req.user
const addUserMiddleware = (req, res, next) => {
  req.user = "Guest"; // Add user property to request
  next(); // Move to the next middleware/route handler
};

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>');
});

//  Apply middleware only for /welcome route
app.get('/welcome', addUserMiddleware, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

//  Start the server
app.listen(3000, () => {
  console.log("Server is up and running on port 3000! Ready to handle requests.");
});
