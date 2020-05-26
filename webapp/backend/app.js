var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var DOSCG = require('./routes/DOSCG')

app.use('/', DOSCG)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(3000, () => 
  console.log('server run listening on port 3000')
);