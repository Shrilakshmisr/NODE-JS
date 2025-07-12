const express = require("express");
const app = express();
const PORT = 3000;

// Import product routes
const productRoutes = require("./routes/productRoutes");

// Middleware
app.use(express.json());

// Mount routes
app.use("/products", productRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).send("404 - Route Not Found");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
