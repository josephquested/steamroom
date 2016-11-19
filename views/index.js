var header = require('./partials/header')

function render (data) {
  return `
    ${header()}
    <div id="rooms">
      ${renderRooms()}
    </div>
    <script src="/bundle.js"></script>
  `
}

function renderRooms () {
  var html = ''
  io.rooms.forEach((room) => {
    html += `
      <div class="room-container">
        <div class="room-content">
          <h3>${room.name}</h3>
          <h2>${room.genre}</h2>
        </div>
      </div>
    `
  })
  return html
}

module.exports = render
