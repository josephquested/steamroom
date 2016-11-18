var express = require('express')
var templit = require('templit')
var bodyParser = require('body-parser')

var app = express()
var http = require('http').Server(app);
var PORT = process.env.PORT || 3000

var index = require('./routes/index')
var create = require('./routes/create')
var room = require('./routes/room')

global.io = require('./socket/init')(http)

// MIDDLEWARE //
app.engine('js', templit)
app.set('view engine', 'js')
app.set('views', `${__dirname}/views`)
app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({ extended: false }))

// ROUTES //
app.use('/', index)
app.use('/create', create)
app.use('/room', room)

http.listen(PORT, () => {
  console.log(`steamroom_${PORT}`)
})
