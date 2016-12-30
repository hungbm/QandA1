var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator')

var schema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    avatarUrl: {type: String},
    summary: {type: String},
    name: {type: String},
    dateJoin: {type: String},
    point: {type: Number}
}) ;

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', schema,'users');