var header = require('./partials/header')

function render (data) {
  return `
    ${header()}
    <input placeholder="search rooms">
    <input class="nav" type="button" onclick="location.href='/create'" value="create room"/>
    <hr>
    <div id="rooms">

      <div class="room-container">
        <div class="room-content">
          <h3>test room title</h3>
        </div>
      </div>

      <div class="room-container">
      </div>

      <div class="room-container">
      </div>

    </div>
  `
}

module.exports = render
