const express = require('express')

const router = express.Router()


//khai báo route
router.get('/', function (req, res) {
res.render('sample.ejs')
  })
router.get('/abc', function (req, res) {
    res.send('234')
  })

  module.exports = router