module.exports = (urlArray) => {
  var roomID = urlArray[4].split('=')[1]
  io.emit('join', roomID)
}
