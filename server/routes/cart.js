const express = require('express');
const { auth } = require('../middleware/auth');
const Cart = require('../models/Cart');
const router = express.Router();

// Get user's cart
router.get('/', auth, async (req, res) => {
  let cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
  if (!cart) cart = await Cart.create({ user: req.user.id, items: [] });
  res.json(cart);
});

// Add product to cart
router.post('/', auth, async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ user: req.user.id });
  if (!cart) cart = await Cart.create({ user: req.user.id, items: [] });
  const itemIndex = cart.items.findIndex(i => i.product.toString() === productId);
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ product: productId, quantity });
  }
  await cart.save();
  res.json(cart);
});

// Update quantity
router.put('/:id', auth, async (req, res) => {
  const { quantity } = req.body;
  let cart = await Cart.findOne({ user: req.user.id });
  if (!cart) return res.status(404).json({ msg: 'Cart not found' });
  const item = cart.items.id(req.params.id);
  if (!item) return res.status(404).json({ msg: 'Item not found' });
  item.quantity = quantity;
  await cart.save();
  res.json(cart);
});

// Remove item from cart
router.delete('/:id', auth, async (req, res) => {
  let cart = await Cart.findOne({ user: req.user.id });
  if (!cart) return res.status(404).json({ msg: 'Cart not found' });
  cart.items.id(req.params.id).remove();
  await cart.save();
  res.json(cart);
});

module.exports = router;