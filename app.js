'use strict';

const hostname = '127.0.0.1';
const port = 3000;

const koa = require('koa');
const app = koa();
const serve = require('koa-static');
const mysql = require('./config/db.js');
const router = require('./router.js');
const bodyParser = require('koa-bodyparser')();

app.use(serve('./src'));
app.use(bodyParser);
app.use(function* () {
  mysql.makeConnection();
})
app.use(router.routes());

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
