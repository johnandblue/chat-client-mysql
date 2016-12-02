const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
console.log(process.env);
mongoose.connect(process.env.MONGOLAB_URI);

module.exports = mongoose.connection;
