module.exports = (roomID) => {
  var messageList = document.getElementById('message-list')
  document.getElementById('message-button').onclick = sendMessage

  io.on('server-message', (message) => {
    appendMessage(message)
  })

  function sendMessage (e) {
    e.preventDefault()
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
