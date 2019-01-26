const mongoose = require('mongoose')
// Users { user_id, email, password, verified, 2fa_key }


const OAuthUserSchema = mongoose.Schema({
    //user_id: ObjectId, 
    username: {type: String, required: true, unique: true}
    email: String, 
    password: {type: String, required: true}, 
    verified: {type: Boolean, required: true, default: false}, 
    auth_key: String, 
    realm_id: {type: ObjectId, required: true}, 
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
