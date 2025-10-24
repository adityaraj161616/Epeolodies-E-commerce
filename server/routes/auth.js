const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/User');
require('../utils/passport'); // Initializes Passport strategies

const router = express.Router();

// ------------------------------
// 🧾 SIGNUP ROUTE
// ------------------------------
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ msg: 'Username and password are required' });

    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ msg: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });

    res.status(201).json({ msg: 'User created successfully' });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// ------------------------------
// 🔐 LOGIN ROUTE
// ------------------------------
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: 'Invalid username or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid username or password' });

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// ------------------------------
// 🚪 LOGOUT ROUTE
// ------------------------------
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.json({ msg: 'Logged out successfully' });
  });
});

// ------------------------------
// 🌐 GOOGLE AUTH ROUTES
// ------------------------------
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login.html', session: false }),
  async (req, res) => {
    try {
      // Create JWT for authenticated user
      const token = jwt.sign(
        { id: req.user._id, isAdmin: req.user.isAdmin },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      // Redirect with JWT in query (frontend can store it)
      res.redirect(`/auth-success.html?token=${token}`);
    } catch (err) {
      console.error('Google callback error:', err);
      res.redirect('/login.html');
    }
  }
);

// ------------------------------
// 📘 FACEBOOK AUTH ROUTES
// ------------------------------
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login.html', session: false }),
  async (req, res) => {
    try {
      const token = jwt.sign(
        { id: req.user._id, isAdmin: req.user.isAdmin },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      res.redirect(`/auth-success.html?token=${token}`);
    } catch (err) {
      console.error('Facebook callback error:', err);
      res.redirect('/login.html');
    }
  }
);

module.exports = router;
