const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chatapp');
const db = mongoose.connection;

module.exports = db;
