
const express = require('express');
const productRoutes = require('./routes/products');

const app = express();

// Use product routes
app.use('/main', productRoutes);

app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
})

// Other middleware and routes...

module.exports = app;
