var io = global.io = require('socket.io-client')()
var urlArray = window.location.href.split('/')

if (urlArray[3] == "room") {
  require('./join-room')(urlArray)
}

io.on('welcome', () => {
  console.log('i feel so welcome!')
})
