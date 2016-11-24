var header = require('./partials/header')

function render (data) {
  return `
    ${header()}
    <h1 id="room-name">${data.name}</h1>
    <h2 id="room-genre">${data.genre}</h2>
    <hr>
    <div id="message-list"></div>
    <form id="message-form">
      <input id="user-field" placeholder="name"/>
      <br>
      <textarea id="message-field" placeholder="message" autocomplete="off"></textarea>
      <button id="message-button">send</button>
    </form>
    <script src="../bundle.js"></script>
  `
}

module.exports = render
