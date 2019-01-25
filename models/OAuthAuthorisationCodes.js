const mongoose = require('mongoose')
// OAuth_Authorisation_Codes { authorisation_code_id, authorisation_code, consumer_id, user_id, expires, scope } 


const OAuthAuthorisationCodesSchema = mongoose.Schema({
    //authorisation_code_id: ObjectId, 
    authorisation_code: String, 
    consumer_id: ObjectId, 
    user_id: ObjectId, 
    expires: Date, 
    scope: String, 
    realm_id: ObjectId
}, {
    timestamps: true
})

/*
OAuthAuthorisationCodesSchema.methods.example = function(functionAttribute) {
    return this._id === functionAttribute
}

OAuthAuthorisationCodesSchema.virtual('attribute').get(function() {
    return 'Some_Value'
})
*/

module.exports = mongoose.model('OAuthAuthorisationCodes', OAuthAuthorisationCodesSchema)
