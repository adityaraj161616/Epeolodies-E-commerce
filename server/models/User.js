const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String },
  googleId: { type: String },
  facebookId: { type: String },
  isAdmin: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
