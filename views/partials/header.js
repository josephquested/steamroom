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
  `
}

module.exports = render
