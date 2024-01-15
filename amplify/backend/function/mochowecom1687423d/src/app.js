
const express = require('express');
const productRoutes = require('./routes/products');

const app = express();

// Use product routes
app.use('/products', productRoutes);

// Other middleware and routes...

module.exports = app;
