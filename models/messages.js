const dbPath = __dirname + '/db.json';
const fs = require('fs')
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));


setInterval(function () {
  fs.writeFile(dbPath, JSON.stringify(db));
}, 5000);

const Message = {}

Message.getAll = function () {
  console.log('db.msgs', db.msgs);
  return db.msgs;
}

Message.postMessage = function (msg) {
  db.msgs.push(msg);
}

module.exports = Message;
