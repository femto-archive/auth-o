const mongoose = require('mongoose')

const OAuthConsumerSchema = mongoose.Schema({
    // etc.
}, {
    timestamps: true
})

OAuthConsumer.methods.example = function(functionAttribute) {
    return this._id === functionAttribute
}

OAuthConsumer.virtual('attribute').get(function() {
    return 'Some_Value'
})

module.exports = mongoose.model('OAuthConsumer', OAuthConsumerSchema)