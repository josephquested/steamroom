var header = require('./partials/header')

function render (data) {
  return `
    ${header()}
    <h2>create a room_</h2>
    <form action="/create" method="post">
      <input placeholder="name">
      <input placeholder="genre (one word)">
      <input type="submit" value="create room"/>
    </form>
  `
}

module.exports = render
