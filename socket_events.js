module.exports = function (io) {


  io.sockets.on('connection', function (socket) {
    socket.on('new message', function(data) {
      console.log('got a new message', data);
      socket.broadcast.emit('new message', {
        user: data.user,
        content: data.content
      });
    })
  });
}


socket.on('new message', function (data) {
  co(controller.postMessage(data));
  // socket.broadcast.emit('new message', {
  //   user: data.user,
  //   content: data.content
  // });
});
