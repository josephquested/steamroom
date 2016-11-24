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

  function sendMessage () {
    var messageObj = formatMessage()
    io.emit('message', messageObj)
    clearMessageField()
  }

  function appendMessage (data) {
    var li = document.createElement('div')
    li.innerHTML = `${data.user.bold()}${data.message}`
    li.classList.add('message')
    messageList.appendChild(li)
  }

  function formatMessage (user, message) {
    var messageField = document.getElementById('message-field')
    var userField = document.getElementById('user-field')
    return {
      user: `<pre class="message-user">${userField.value}_</pre>`,
      message: `<pre class="message-text">${messageField.value}</pre><br>`,
      roomID: roomID
    }
  }

  function clearMessageField () {
    var messageField = document.getElementById('message-field')
    messageField.value = null
  }
}
