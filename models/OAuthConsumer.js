const mongoose = require('mongoose')
// OAuth_Consumer { consumer_id, consumer_name, consumer_secret, redirect_uri }


const OAuthConsumerSchema = mongoose.Schema({
    consumer_id: ObjectId, 
    consumer_name: String, 
    consumer_secret: String, 
    redirect_uri: String
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
