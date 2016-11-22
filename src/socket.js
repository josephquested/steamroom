var io = global.io = require('socket.io-client')()
var urlArray = window.location.href.split('/')

if (urlArray[3] == "room") {
  var roomID = urlArray[4].split('=')[1]
  require('./join-room')(roomID)
  require('./message-handler')(roomID)
}
