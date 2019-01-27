const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const OAuthAuthorisationCodeSchema = mongoose.Schema({
    authorisationCode: { type: String },
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

OAuthAuthorisationCodeSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('OAuthAuthorisationCode', OAuthAuthorisationCodeSchema)
