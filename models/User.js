const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const UserSchema = mongoose.Schema({
    name: {
        user: { type: String, required: true, unique: true }
    },
    email: {
        address: { type: String, required: true, unique: true },
        verified: { type: Boolean, required: true, default: false }
    },
    authKey: { type: String },
    realm: { type: ObjectId, ref: 'Realm', autopopulate: true },
    groups: [{ type: ObjectId, ref: 'Group', autopopulate: true }]
}, {
    timestamps: true
})

UserSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('User', UserSchema)
