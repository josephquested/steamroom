var router = require('express').Router()
var createRoom = require('../socket/create-room')
var getRoom = require('../socket/get-room')

router.get('/', (req, res) => {
  res.render('room', getRoom(req.query.id))
})

router.post('/', (req, res) => {
  var roomID = createRoom({name: req.body.name, genre: req.body.genre})
  res.redirect(`/room/?id=${roomID}`)
})

module.exports = router
