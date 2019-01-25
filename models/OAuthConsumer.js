const mongoose = require('mongoose')
// OAuth_Consumer { consumer_id, consumer_name, consumer_secret, redirect_uri }


const OAuthConsumerSchema = mongoose.Schema({
    //consumer_id: ObjectId, 
    consumer_name: {type: String, required: true}, 
    consumer_secret: {type: String, required: true}, 
    redirect_uri: {type: String, required: true}, 
    realm_id: {type: mongoose.Types.ObjectId, required: true}
}, {
    timestamps: true
})

/*
OAuthConsumerSchema.methods.example = function(functionAttribute) {
    return this._id === functionAttribute
}

OAuthConsumerSchema.virtual('attribute').get(function() {
    return 'Some_Value'
})
*/

module.exports = mongoose.model('OAuthConsumer', OAuthConsumerSchema)
