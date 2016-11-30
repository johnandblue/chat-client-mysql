'use strict';

const hostname = '127.0.0.1';
const port = 3000;

const koa = require('koa');
const app = koa();
const serve = require('koa-static');
const mysql = require('mysql');
// const dbConfig = require('./config/db.js');
const router = require('./router.js');
const bodyParser = require('koa-bodyparser')();

const dbConfig = {
  'db': {
        user: 'root',
        password: 'password',
        database: 'chatapp',
        host: 'localhost'
      }
}

app.use(serve('./src'));
app.use(bodyParser);

const connection = mysql.createConnection(dbConfig.db);

connection.connect(function (err) {
  if (err) {
    console.error('error connecting to db: ' + err.stack);
    return;
  }

  console.log('connected to db as id ' + connection.threadId);

});

connection.query('SELECT * from messages', function(err, rows, fields) {
  if (err) throw err;

  console.log('The rows are: ', rows);
  console.log('The fields are: ', fields);
});

connection.end();


app.use(router.routes());

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
