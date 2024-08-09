require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const configViewEngine = require('./config/viewsEngine')

//config static files
app.use(express.static(path.join(__dirname, 'public')))

//hosting
const port = process.env.PORT || 8080
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app)

//khai báo route
app.get('/', function (req, res) {
  res.render('sample.ejs')
})
app.get('/abc', function (req, res) {
  res.send('234')
})

app.listen(port, hostname)