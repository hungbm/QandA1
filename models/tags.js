var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    tag: {type: String}
}) ;

module.exports = mongoose.model('Tags', schema,'tags');