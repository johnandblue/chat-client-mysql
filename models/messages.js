const mongodb = require('../config/db.js');

const Message = {};

Message.getAll = function* () {
  return new Promise(function (resolve, reject) {
    try {
      mongodb.query('SELECT * from messages', function (err, rows, fields) {
        if (err) reject(err);
        // console.log('rows',rows);
        resolve(rows);
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
