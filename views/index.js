var header = require('./partials/header')

function render (data) {
  return `
    ${header()}
    <div id="rooms">

      <div class="room-container">
        <div class="room-content">
          <h3>test room title</h3>
        </div>
      </div>

    <script src="/bundle.js"></script>
  `
}

module.exports = render
