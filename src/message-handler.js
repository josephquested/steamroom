module.exports = (roomID) => {
  var messageList = document.getElementById('message-list')
  document.getElementById('message-button').onclick = handleClick

  // SOCKET //

  io.on('server-message', (message) => {
    appendMessage(message)
  })

  // SUBMIT FUNCTIONS //

  var keyLog = {}
  onkeydown = onkeyup = (e) => {
    e = e || event
    keyLog[e.keyCode] = e.type == 'keydown'
    checkForSubmit()
  }

  function checkForSubmit () {
    if (keyLog[13] && !keyLog[16]) {
      sendMessage()
    }
  }

  function handleClick (e) {
    e.preventDefault()
    sendMessage()
  }

  // MESSAGE FUNCTIONS //

  function sendMessage (messageField) {
    var messageField = document.getElementById('message-field')
    var userField = document.getElementById('user-field')
    var messageObj = {
      roomID: roomID,
      message: messageField.value,
      user: userField.value
    }
    io.emit('message', messageObj)
    messageField.value = ''
  }

  function appendMessage (data) {
    var li = document.createElement('li')
    li.appendChild(document.createTextNode(`${data.user}: ${data.message}`))
    li.classList.add('message')
    messageList.appendChild(li)
  }
}
