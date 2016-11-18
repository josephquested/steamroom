module.exports = (connection) => {
  var io = require('socket.io')(connection)
  io.rooms = []

  io.on('connection', (socket) => {
    console.log('a user connected')
  })

  return io
}
