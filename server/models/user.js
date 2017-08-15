var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String,
  salt: String
}, {
  versionKey: false
})

var users = mongoose.model('users', userSchema);

module.exports = users;
