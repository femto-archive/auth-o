const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const OAuthConsumerSchema = mongoose.Schema({
    name: {
        human: { type: String },
        slug: { type: String, required: true, unique: true }
    },
    secret: { type: String, required: true },
    redirectURI: { type: String, required: true },
    realm: { type: ObjectId, ref: 'Realm', autopopulate: true }
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
})

OAuthConsumerSchema.virtual('display').get(function() {
    return this.name.human || this.name.slug
})

OAuthConsumerSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('OAuthConsumer', OAuthConsumerSchema)
