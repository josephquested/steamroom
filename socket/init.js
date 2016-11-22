module.exports = (connection) => {
  var io = require('socket.io')(connection)
  io.rooms = []

  io.on('connection', (socket) => {
    socket.on('join', (roomID) => {
      socket.join(roomID)
      io.to(roomID).emit('welcome')
    })
  })

  return io
}
