const mongoose = require('mongoose')
// OAUth_Access_Tokens { access_token_id, access_token, consumer_id, user_id, expires, scope }


const OAuthAccessTokensSchema = mongoose.Schema({
    access_token_id: ObjectId, 
    access_token: String, 
    consumer_id: ObjectId, 
    user_id: ObjectId, 
    expires: Date, 
    scope: String
}, {
    timestamps: true
})

/*
OAuthAccessTokensSchema.methods.example = function(functionAttribute) {
    return this._id === functionAttribute
}

OAuthAccessTokensSchema.virtual('attribute').get(function() {
    return 'Some_Value'
})
*/

module.exports = mongoose.model('OAuthAccessTokens', OAuthAccessTokensSchema)
