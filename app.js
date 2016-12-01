'use strict';

const hostname = '127.0.0.1';
const port = 3000;

const koa = require('koa');
const app = koa();
const serve = require('koa-static');
const router = require('./router.js');
const bodyParser = require('koa-bodyparser')();
const assert = require('assert');
const mongodb = require('./config/db.js');
const db_url = 'mongodb://localhost:27017/chatapp';

app.use(serve('./src'));
app.use(bodyParser);
app.use(router.routes());

mongodb.connect(db_url, function (err, db) {
  if (err) console.error('error connecting: ' + err.stack);
  else console.log('Connection established to', db_url);

  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
});
