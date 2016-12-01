const mongodb = require('../config/db.js');
const MsgsModel = require('./messages_db.js');

const Message = {};

Message.getAll = function* () {
  return new Promise(function (resolve, reject) {
    try {
      MsgsModel.find(function (err, messages) {
        if (err) return console.error(err);
        console.log('messages',messages);
        resolve(messages);
      });
    }
    catch (err) {
        // 500 Internal Server Error
        this.status = 500;
        this.body = { error: err };
    }
  });
};

Message.postMessage = function (msg) {
  // db.msgs.push(msg);
};

module.exports = Message;
