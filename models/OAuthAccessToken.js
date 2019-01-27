const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const OAuthAccessTokenSchema = mongoose.Schema({
    accessToken: { type: String },
    consumer: { type: ObjectId, ref: 'OAuthConsumer', autopopulate: true },
    user: { type: ObjectId, ref: 'User', autopopulate: true },
    scope: [{ type: ObjectId, ref: 'OAuthScope', autopopulate: true }],
    realm: { type: ObjectId, ref: 'Realm', autopopulate: true },
    expires: { type: Date }
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
})

OAuthAccessTokenSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('OAuthAccessToken', OAuthAccessTokenSchema)
