var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  content: String,
  category: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})

var articles = mongoose.model('articles', articleSchema)

module.exports = articles;
