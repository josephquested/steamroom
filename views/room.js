var header = require('./partials/header')

function render (data) {
  return `
    ${header()}
    <h1>${data.name}</h1>
    <h2>${data.genre}</h2>
    <ul id="messages"></ul>
    <form action="">
      <input id="message-field" autocomplete="off"/>
      <button id="message-button">send</button>
    </form>
    <script src="../bundle.js"></script>
  `
}

module.exports = render
