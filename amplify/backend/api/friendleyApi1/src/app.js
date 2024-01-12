
const express = require('express');
const routes = require('./routes/products');

const app = express();

// Use the routes module
app.use('/', routes);

module.exports = app;
