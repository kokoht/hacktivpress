const user = require('../models/user')
const jwt = require('jsonwebtoken')
const helper = require('../helpers/signin')
require('dotenv').config()

function signup(req,res) {
  let salt = helper.random()
  let pass = helper.cryptoPass(req.body.password, salt)
  user.create({
    username: req.body.username,
    password: req.body.password,
    salt: salt
  })
  .then(response => {
    res.send(response)
  })
  .catch(err => {
    res.send(err)
  })
}

function signin (req,res){
  user.findOne({
    username: req.body.username
  })
  .then(response => {
    let salt = response.salt
    let pass
  })
}
