exports = module.exports = function (io) {
  io.sockets.on('connection', function (socket) {
    // socket.emit('chat', {
    //   hello: 'world'
    // });
    // socket.on('new message', function (data) {
    //   socket.broadcast.emit('new message', {
    //     username: data.user,
    //     message: data.content
    //   });
    //   io.sockets.emit('new message', data);
    //   console.log('new message data inside socket events',data);
    // });
    // socket.on('new reply', function (data) {
    //   socket.broadcast.emit('new reply', {
    //     username: data.user,
    //     message: data.content
    //   });
    //   io.sockets.emit('new reply', data);
    //   console.log('new reply data inside socket events', data);
    // });
    socket.on('new message', function(data) {
      console.log('got a new message', data);
      socket.broadcast.emit('new message', {
        user: data.user,
        content: data.content
      });
    })
  });
}
