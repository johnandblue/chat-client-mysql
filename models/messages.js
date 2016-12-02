const mongodb = require('../config/db.js');
const MsgsModel = require('./messages_db.js');

const Message = {};

Message.getAll = function* () {
  return MsgsModel.Message.find();
};

Message.postMessage = function (msg) {
  MsgsModel.Message.create(msg, function (err, message) {
    if (err) handleError(err);
    // console.log('message', message);
  });
};

Message.deleteAll = function* () {
  mongodb.db.listCollections({name: 'messages'})
    .next(function (err, collinfo) {
        if (collinfo) {
            // The collection exists
            mongodb.db.dropCollection('messages');
        }
    });
}

module.exports = Message;
