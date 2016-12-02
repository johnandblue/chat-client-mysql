var Message = require('../models/messages_db.js')

exports.postMessage = function* () {
  const newMessage = new Message(this.request.body);
  yield newMessage.save();
  this.status = 200;
};

exports.getMessages = function* () {
  this.body = yield Message.find();
}

exports.deleteMessages = function* () {
  yield Message.remove();
  this.status = 200;
}
