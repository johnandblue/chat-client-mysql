const mongoose = require('mongoose');

const MessagesSchema = {};

MessagesSchema.msgsSchema = mongoose.Schema({
  content: String,
  user: String,
  timestamp: { type: Date, default: Date.now }
});

MessagesSchema.Message = mongoose.model('Message', MessagesSchema.msgsSchema);

module.exports = MessagesSchema;
