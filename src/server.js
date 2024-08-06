const express = require('express')
const app = express()
require('dotenv').config()
const path = require('path')

const port = process.env.PORT || 8080
const hostname = process.env.HOST_NAME

app.get('/', function (req, res) {
  res.render('sample.ejs')
})
app.get('/abc', function (req, res) {
  res.send('123')
})
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.listen(port, hostname)