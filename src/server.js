require('dotenv').config()
const express = require('express')
const app = express()
const configViewEngine = require('./config/viewsEngine')
const webRoutes = require("./routes/web")

//hosting
const port = process.env.PORT || 8080
const hostname = process.env.HOST_NAME

//config template engine
configViewEngine(app)

//Khai báo routes
app.use("/", webRoutes)



app.listen(port, hostname)