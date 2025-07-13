const express = require('express');
const path = require('path');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

// Middleware for serving static files (optional, if needed)
app.use(express.static('public'));

// Use product routes
app.use('/api', productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
