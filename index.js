var express = require('express')
var templit = require('templit')
var bodyParser = require('body-parser')

var index = require('./routes/index')
var create = require('./routes/create')

var app = express()
var PORT = process.env.PORT || 3000

app.engine('js', templit)
app.set('view engine', 'js')
app.set('views', `${__dirname}/views`)

app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({ extended: false }))

// GET ROUTES //
app.use('/', index)
app.use('/create', create)

app.listen(PORT, () => {
  console.log(`steamroom_${PORT}`)
})
