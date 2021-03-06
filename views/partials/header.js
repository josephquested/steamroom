function render (data) {
  return `
    <div id="header">
      <a id="header-link" href="/"><h1 id="header-title">steamroom_</h1></a>
      <h2 id="guest-quantity" class="inline">
        <p class="inline">${io.engine.clientsCount}</p> guests
      </h2>
      <h2 id="room-quantity" class="inline">
        <p class="inline">${io.rooms.length}</p> rooms
      </h2>
      <hr>
      <input placeholder="search rooms">
      <input class="nav" type="button" onclick="location.href='/create'" value="create room"/>
      <hr>
    </div>
  `
}

module.exports = render
