const express = require('express');
const { auth } = require('../middleware/auth');
const Order = require('../models/Order');
const Cart = require('../models/Cart');
const router = express.Router();

// Place an order
router.post('/', auth, async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
  if (!cart || cart.items.length === 0) return res.status(400).json({ msg: 'Cart is empty' });

  const totalPrice = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const order = new Order({
    user: req.user.id,
    items: cart.items,
    totalPrice,
    shippingInfo: req.body.shippingInfo,
    status: 'Processing'
  });
  await order.save();
  cart.items = [];
  await cart.save();
  res.status(201).json(order);
});

// Get user's orders
router.get('/', auth, async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('items.product');
  res.json(orders);
});

module.exports = router;