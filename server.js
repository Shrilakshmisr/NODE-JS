const express = require("express");
const app = express();
const PORT = 3000;

// Import route files
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

// Middleware
app.use(express.json());

// Route mounting
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).send("404 - Route Not Found");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
