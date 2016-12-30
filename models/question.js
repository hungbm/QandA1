var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator')

var schema = new Schema({
    upvote: {type: Number, required: true},
    view: {type: Number, required: true},
    createdDate: {type: String, required: true},
    isAnswered:{type: Boolean, required: true},
    isClosed: {type: Boolean, required: true},
    userID : {type: String, required: true},
    tags: [{type: String}],
    question: {
        title: {type: String, required: true},
        content: {type: String, required: true}
    },
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]    
}) ;

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('Question', schema,'topics');