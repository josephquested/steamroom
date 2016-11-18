var shortID = require('shortid')

module.exports = (data) => {
  var room = {
    id: shortID.generate(),
    name: data.name,
    genre: data.genre
  }

  io.rooms.push(room)
  return room.id
}
