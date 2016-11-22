var header = require('./partials/header')

function render (data) {
  return `
    ${header()}
    <h1>${data.name}</h1>
    <h2>${data.genre}</h2>
    <ul id="message-list"></ul>
    <form>
      <input id="user-field" placeholder="name"/>
      <br>
      <textarea id="message-field" autocomplete="off"></textarea>
      <button id="message-button">send</button>
    </form>
    <script src="../bundle.js"></script>
  `
}

module.exports = render
