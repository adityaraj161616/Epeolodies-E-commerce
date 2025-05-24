const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  sizes: [String],
  colors: [String],
  images: [String],
  category: String
});

module.exports = mongoose.model('Product', productSchema);