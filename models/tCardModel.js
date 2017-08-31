var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var tinderCardModel = new Schema({
  id:String,
  name:String,
  birthday:String,
  bio:String
});

module.exports = mongoose.model("TinderCard",tinderCardModel);
