'use strict';

const hostname = '127.0.0.1';
const port = 3000;

const koa = require('koa');
const app = koa();
const serve = require('koa-static');
const mysql = require('koa-mysql');
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

const connection = mysql.createConnection(dbConfig.db);

app.use(serve('./src'));
app.use(bodyParser);
app.use(function* () {
  let rows = yield connection.query('SELECT * from MESSAGES');
  let msgs = [];
  console.log('rows',rows);
  rows.forEach(function (msg) {
    msgs.push({ content: msg.content, timeStamp: msg.timestamp, userId: msg.uid });
  });
  this.body = msgs;
});
app.use(router.routes());

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
