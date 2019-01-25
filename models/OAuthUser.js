const mongoose = require('mongoose')
// Users { user_id, email, password, verified, 2fa_key }


const OAuthUserSchema = mongoose.Schema({
    //user_id: ObjectId, 
    email: String, 
    password: String, 
    verified: Boolean, 
    auth_key: String, 
    realm_id: ObjectId, 
    group_ids: [ObjectId]
}, {
    timestamps: true
})

/*
OAuthUserSchema.methods.example = function(functionAttribute) {
    return this._id === functionAttribute
}

OAuthUserSchema.virtual('attribute').get(function() {
    return 'Some_Value'
})
*/

module.exports = mongoose.model('OAuthUser', OAuthUserSchema)
