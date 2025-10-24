const mongoose = require('mongoose');
const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: Number
});
const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [orderItemSchema],
  totalPrice: Number,
  shippingInfo: Object,
  status: { type: String, default: 'Processing' }
});
module.exports = mongoose.model('Order', orderSchema);