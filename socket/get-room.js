module.exports = (roomID) => {

  var room = io.rooms.filter((roomObj) => {
    return roomObj.id == roomID
  })[0]

  return room
}
