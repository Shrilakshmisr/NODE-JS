const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Importing Routers
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// Using Routers
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

// Start Server
app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
