// index.js
const express = require('express');
const cors = require('cors'); // Import the CORS package
const products = require('./sampleData'); // Import your data

const app = express();
const PORT = 3131;

// Use CORS middleware
app.use(cors());

// Define a route to serve the products array
app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
