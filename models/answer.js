var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator')

var schema = new Schema({
    userID: {type: String, required: true} ,
    upvote: {type: Number, required: true},
    isBest: {type: Boolean, required: true},
    createDate: {type: String},
    store_ID: {type: String, required: true},
    content: {type: String, required: true}
}) ;

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('Answer', schema,'answers');