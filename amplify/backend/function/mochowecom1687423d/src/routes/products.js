const express = require('express');
const router = express.Router();

// GET all products
router.get('/products', (req, res) => {
  // Logic to fetch all products from the database
  res.send('Get all products');
});

// GET a single product by ID
router.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  // Logic to fetch a product by ID from the database
  res.send(`Get product with ID ${productId}`);
});

// CREATE a new product
router.post('/products', (req, res) => {
  const productData = req.body;
  // Logic to create a new product in the database
  res.send('Create a new product');
});

// UPDATE a product by ID
router.put('/products/:id', (req, res) => {
  const productId = req.params.id;
  const productData = req.body;
  // Logic to update a product by ID in the database
  res.send(`Update product with ID ${productId}`);
});

// DELETE a product by ID
router.delete('/products/:id', (req, res) => {
  const productId = req.params.id;
  // Logic to delete a product by ID from the database
  res.send(`Delete product with ID ${productId}`);
});

module.exports = router;
