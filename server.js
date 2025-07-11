const express = require('express');
const app = express();

// Import routers
const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');

// Middleware
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Student & Course Portal API!');
});

// Use routers
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// 404 Handler for invalid routes
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
