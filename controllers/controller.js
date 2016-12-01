var Message = require('../models/messages.js')

const fs = require('fs');
const path = require('path');

const messagesCtrl = {};

messagesCtrl.postMessage = function* () {
  Message.postMessage(this.request.body);
  this.status = 201;
};

messagesCtrl.getMessages = function* () {
  yield this.body = Message.getAll();
  console.log('this.body', this.body);
}

module.exports = messagesCtrl;
