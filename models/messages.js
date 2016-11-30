const db = require('../config/db.js');

// setInterval(function () {
  // fs.writeFile(dbPath, JSON.stringify(db));
// }, 5000);

const Message = {};

Message.getAll = function* () {
  let msgs = [];
  try {
    db.makeConnection();
    // db.connect();
    const rows = yield db.query('SELECT * from MESSAGES');

    console.log('rows',rows);
    rows.forEach(function (msg) {
      msgs.push({ content: msg.content, timeStamp: msg.timestamp, userId: msg.uid });
    });
    this.body = rows;
    // db.end();
  }
  catch (err) {
      // 500 Internal Server Error
      this.status = 500;
      this.body = { error: err };
  }
  console.log('msgs',msgs);
  return rows;
}

Message.postMessage = function (msg) {
  // db.msgs.push(msg);
}

module.exports = Message;
