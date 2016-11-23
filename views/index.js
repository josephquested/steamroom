var header = require('./partials/header')

function render (data) {
  return `
    ${header()}
    <div id="rooms">
      ${renderRooms(io.rooms)}
      ${dummyRooms()}
    </div>
    <script src="/bundle.js"></script>
  `
}

function renderRooms (rooms) {
  var html = ''
  rooms.forEach((room) => {
    html += `
      <a class="room-link" href="room/?id=${room.id}">
        <div class="room-container">
          <div class="room-content">
            <h2 class="room-link-name">${room.name}</h3>
            <h3 class="room-link-genre">${room.genre}</h2>
          </div>
        </div>
      </a>
    `
  })
  return html
}

var dummyRooms = () => {
  var dummies = [
    {name: "Dexter Quested Convos", genre: "children"},
    {name: "Robots", genre: "technology"},
    {name: "Was Hitler right?", genre: "history"},
    {name: "Best Cheers Episdoe..", genre: "tv"},
    {name: "I am homeless", genre: "lifestyle"}
  ]
  if (!process.env.PORT) {
    return renderRooms(dummies)
  } else {
    return '<div></div>'
  }
}

module.exports = render
