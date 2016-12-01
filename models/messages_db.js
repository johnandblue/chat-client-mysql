const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const MessagesSchema = {};

MessagesSchema.msgsSchema = mongoose.Schema({
  content: String,
  user: String,
  timestamp: { type: Number, default: Date.now() }
});

MessagesSchema.Message = mongoose.model('Message', MessagesSchema.msgsSchema);

module.exports = MessagesSchema;
