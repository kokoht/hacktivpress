var express = require('express')
var router = express.Router()
var controller = require('../controllers/registrationController')

router.post('/signin', controller.signin)
router.post('/signup', controller.signup)

module.exports = router
