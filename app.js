'use strict';

const hostname = '127.0.0.1';
const port = 3000;

const koa = require('koa');
const app = koa();
const serve = require('koa-static');
const router = require('./router.js');
const bodyParser = require('koa-bodyparser')();
const sequelize = require('./config/db.js');

app.use(serve('./src'));
app.use(bodyParser);
app.use(router.routes());

sequelize.db.sync().then(function (err) {
  if (err) console.error('error connecting: ' + err.stack);
  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
});
