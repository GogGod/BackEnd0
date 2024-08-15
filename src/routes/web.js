const express = require('express')

const router = express.Router()

const { getHomepage, getHomepageABC } = require('../controllers/homeController')


//khai báo route
router.get('/', getHomepage)
router.get('/abc', getHomepageABC)

  module.exports = router