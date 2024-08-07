const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

//config static files
app.use(express.static('public'))

//hosting
const port = process.env.PORT || 8080
const hostname = process.env.HOST_NAME

//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//khai báo route
app.get('/', function (req, res) {
  res.render('sample.ejs')
})
app.get('/abc', function (req, res) {
  res.send('234')
})

app.listen(port, hostname)