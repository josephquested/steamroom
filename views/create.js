var header = require('./partials/header')

function render (data) {
  return `
    ${header()}
    <h2>room_</h2>
    <form action="/room" method="post">
      <input autocomplete="off" placeholder="name" name="name">
      <input placeholder="genre (one word)" name="genre">
      <input type="submit" value="create room"/>
    </form>
  `
}

module.exports = render
