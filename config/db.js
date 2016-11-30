const mysql = require('mysql');

const db = {};

db.makeConnection = function* () {
  try {
    const connection = mysql.createConnection({
      user: 'root',
      password: 'password',
      database: 'chatapp',
      host: 'localhost'
    });
    connection.connect();
  }
  catch(err) {
    throw err;
  }
}

module.exports = db;
