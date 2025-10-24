const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import Routes
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/orders');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL, // dynamic for dev & live
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // needed for form submissions

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

// Serve frontend files
app.use(express.static(path.join(__dirname, '../public')));

// Handle 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB connected successfully');
  app.listen(5000, () => console.log('🚀 Server running on port 5000'));
})
.catch(err => console.error('❌ MongoDB connection error:', err));
