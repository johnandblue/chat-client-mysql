var Message = require('./models/messages_db.js');

module.exports = function (io) {

  io.sockets.on('connection', function (socket) {
    // co(controller.getMessages());
    console.log('connected');
    Message.find().then(messages => {
      console.log('on finding success');
      console.log(messages);
      socket.emit('messages', messages)
    });

    socket.on('new message', function (message) {
      const newMessage = new Message(message);
      newMessage.save().then(msg => {
        socket.broadcast.emit('new message', message);
        console.log('saved message', msg);
      });
    });
  });
}
