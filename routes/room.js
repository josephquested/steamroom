var router = require('express').Router()
var createRoom = require('../socket/create-room')

router.get('/:id', (req, res) => {
  res.render('room')
})

router.post('/', (req, res) => {
  var roomID = createRoom({name: req.body.name, genre: req.body.genre})
  res.redirect(`/room/${roomID}`)
})

module.exports = router
