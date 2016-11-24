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
    if (keyLog[13] && !keyLog[16] && document.activeElement == document.getElementById('message-field')) {
      sendMessage()
    }
  }

  function handleClick (e) {
    e.preventDefault()
    if (isUserFieldBlank()) return alert('please enter a screen name_')
    sendMessage()
  }

  // MESSAGE FUNCTIONS //

  function sendMessage () {
    if (isMessageFieldBlank() || isUserFieldBlank()) return null
    io.emit('message', formatMessage())
    clearMessageField()
  }

  function appendMessage (data) {
    var div = document.createElement('div')
    div.innerHTML = `${data.user}${data.message}`
    div.classList.add('message')
    messageList.appendChild(div)
  }

  function formatMessage (user, message) {
    return {
      user: `<pre class="message-user">${getUserName()}_</pre>`,
      message: `<pre class="message-text">${getMessage()}</pre><br>`,
      roomID: roomID
    }
  }

  function clearMessageField () {
    document.getElementById('message-field').value = null
  }

  function getUserName () {
    return document.getElementById('user-field').value
  }

  function getMessage () {
    return document.getElementById('message-field').value
  }

  function isUserFieldBlank () {
    return /^\s*$/.test(getUserName())
  }

  function isMessageFieldBlank () {
    return /^\s*$/.test(getMessage())
  }
}
