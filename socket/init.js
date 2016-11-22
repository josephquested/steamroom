module.exports = (connection) => {
  var io = require('socket.io')(connection)
  io.rooms = []

  io.on('connection', (socket) => {
    socket.on('join', (roomID) => {
      socket.join(roomID)
    })

    socket.on('message', (data) => {
      console.log('got message')
      console.log(data.message)
      io.to(data.roomID).emit('server-message', data)
    })
  })

  return io
}
