const express = require('express');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Central error handler (must come last)
app.use(errorHandler);

app.listen(3000, () => console.log('Server running on port 3000'));
