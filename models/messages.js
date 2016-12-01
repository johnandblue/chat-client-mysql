const mysql = require('mysql');
// setInterval(function () {
  // fs.writeFile(dbPath, JSON.stringify(db));
// }, 5000);

const Message = {};


let msgQuery = function (query) {
  return new Promise(function (resolve, reject) {
    let connection = mysql.createConnection({
      user: 'root',
      password: 'password',
      database: 'chatapp',
      host: 'localhost'
    });

    connection.connect(function (err) {
      if (err) {
        console.error('error connecting to db: ' + err.stack);
        return;
      }
      console.log('connected to db as id ' + connection.threadId);
    });

    connection.query(query, (err, data) => (err ? reject(err) : resolve(data)));

    connection.end;
  });
};

// }


Message.getAll = function* () {
  // console.log('msgQuery',msgQuery);
  let msgs = [];
  try {
    let rows = yield msgQuery('SELECT * from messages');
    console.log('rows',rows);
    rows.forEach(function (msg) {
      // msg = row_view(msg);
      console.log('msg', msg);
      msgs.push({ content: msg.content, timeStamp: msg.timestamp, userId: msg.uid });
    });
    this.body = msgs;
  }
  catch (err) {
      // 500 Internal Server Error
      this.status = 500;
      this.body = { error: err };
  }
  console.log('msgs',msgs);
  return msgs;
};

Message.postMessage = function (msg) {
  // db.msgs.push(msg);
};

module.exports = Message;
