var router = require('express').Router()
var createRoom = require('../socket/create-room')

router.get('/', (req, res) => {
  res.render('create')
})

module.exports = router
