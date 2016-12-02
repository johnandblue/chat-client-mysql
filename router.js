
const router = require('koa-router')();
const co = require('co');

const controller = require('./controllers/controller.js');
const io = require('./app.js');
const socket_events = require('./socket_events.js');
socket_events(io);

router.use(router.routes());
router.post('/messages', controller.postMessage);
router.get('/messages', controller.getMessages);
router.get('/delete', controller.deleteMessages);

module.exports = router;
