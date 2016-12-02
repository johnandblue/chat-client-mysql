const mongoose = require('mongoose');

module.exports = mongoose.model('Message', {
  user: String,
  content: String,
  timestamp: { type: Number, default: Date.now() }
});
