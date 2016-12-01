var Message = require('../models/messages.js')

const fs = require('fs');
const path = require('path');

const messagesCtrl = {};

messagesCtrl.postMessage = function* () {
  Message.postMessage(this.request.body);
  this.status = 201;
};

messagesCtrl.getMessages = function* () {
  this.body = yield Message.getAll();
}

module.exports = messagesCtrl;
