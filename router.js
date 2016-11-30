const koa = require('koa');
const router = require('koa-router')();
const controller = require('./controllers/controller.js');

const path = require('path');

router.use(router.routes());
router.post('/messages', controller.postMessage);
router.get('/messages', controller.getMessages);

module.exports = router;
