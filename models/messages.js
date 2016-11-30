const mysql = require('mysql');

// setInterval(function () {
  // fs.writeFile(dbPath, JSON.stringify(db));
// }, 5000);

const Message = {};

Message.getAll = function* () {
  let msgs = [];
  try {

      const connection = mysql.createConnection({
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

      connection.query('SELECT * from messages', function(err, rows, fields) {
        if (err) throw err;

          let msgs = [];
          console.log('rows',rows);
          rows.forEach(function (msg) {
            msgs.push({ content: msg.content, timeStamp: msg.timestamp, userId: msg.uid });
          });
          this.body = msgs;

      });

      connection.end();

  }
  catch (err) {
      // 500 Internal Server Error
      this.status = 500;
      this.body = { error: err };
  }
  console.log('msgs',msgs);
  return msgs;
}

Message.postMessage = function (msg) {
  // db.msgs.push(msg);
}

module.exports = Message;
