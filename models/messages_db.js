const mongoose = require('mongoose');

const MessagesSchema = {};

MessagesSchema.msgsSchema = mongoose.Schema({
  content: String,
  user: String,
  timestamp: { type: Date, default: Date.now }
});

MessagesSchema.Message = mongoose.model('Message', MessagesSchema.msgsSchema);

MessagesSchema.Message.create({content: 'Test Message 1', user: 'user1'}, function (err, message) {
  if (err) return handleError(err);
});
MessagesSchema.Message.create({content: 'Test Message 2', user: 'user2'}, function (err, message) {
  if (err) return handleError(err);
});

module.exports = MessagesSchema;
