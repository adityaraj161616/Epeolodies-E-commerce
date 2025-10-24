const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// GET /api/products?category=...&minPrice=...&maxPrice=...&color=...&search=...
router.get('/', async (req, res) => {
  const { category, minPrice, maxPrice, color, search } = req.query;
  let filter = {};

  if (category) filter.category = category;
  if (color) filter.colors = color;
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }
  if (search) filter.name = { $regex: search, $options: 'i' };

  const products = await Product.find(filter);
  res.json(products);
});

module.exports = router;