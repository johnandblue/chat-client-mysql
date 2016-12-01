const mongodb = require('../config/db.js');
const MsgsModel = require('./messages_db.js');

const Message = {};

Message.getAll = function* () {
  return new Promise(function (resolve, reject) {
      MsgsModel.Message.find(function (err, messages) {
        if (err) return console.error(err);
        console.log('messages',messages);
        resolve(messages);
      });
  });
};

Message.postMessage = function (msg) {
  // db.msgs.push(msg);
};

module.exports = Message;
