const mongodb = require('../config/db.js');
const MsgsModel = require('./messages_db.js');

const Message = {};

Message.getAll = function* () {
  return MsgsModel.Message.find();
};

Message.postMessage = function (msg) {
  MsgsModel.Message.create(msg, function (err, message) {
    if (err) handleError(err);
    console.log('message', message);
  });
};

module.exports = Message;
