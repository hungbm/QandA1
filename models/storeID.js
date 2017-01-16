var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    voted: [{
        postId: {type: Schema.Types.ObjectId,required: true},
        state: {type: Number, required: true}
    }]
}) ;

module.exports = mongoose.model('StoreID', schema,'storeID');