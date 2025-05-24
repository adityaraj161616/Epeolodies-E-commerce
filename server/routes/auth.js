const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/User');
require('../utils/passport'); // See next step
const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const exists = await User.findOne({ username });
  if (exists) return res.status(400).json({ msg: 'User exists' });
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hash });
  await user.save();
  res.status(201).json({ msg: 'User created' });
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ msg: 'Invalid credentials' });
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ msg: 'Invalid credentials' });
  const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
});

// Logout (client should just delete token, but for demo:)
router.get('/logout', (req, res) => {
  res.json({ msg: 'Logout (delete token on client)' });
});

// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', {
  failureRedirect: '/login.html'
}), (req, res) => {
  // You can generate a JWT here and redirect with it as a query param
  res.redirect('/');
});

// Facebook OAuth
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', passport.authenticate('facebook', {
  failureRedirect: '/login.html'
}), (req, res) => {
  // You can generate a JWT here and redirect with it as a query param
  res.redirect('/');
});

module.exports = router;