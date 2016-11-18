function render (data) {
  return `
    <div id="header">
      <h1>steamroom_</h1>
      <h2 class="inline">
        <p id="guest-quantity" class="inline">0</p> guests
      </h2>
      <h2 class="inline">
        <p id="room-quantity" class="inline">0</p> rooms
      </h2>
      <hr>
    </div>
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
    <script src="/socket.io/socket.io.js"></script>
  `
}

module.exports = render
