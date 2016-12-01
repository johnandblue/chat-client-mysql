const mongodb = require('../config/db.js');
const MsgsModel = require('./messages_db.js');

const Message = {};

Message.getAll = function* () {
  return MsgsModel.Message.find();
};

Message.postMessage = function (msg) {
  // db.msgs.push(msg);
};

module.exports = Message;
