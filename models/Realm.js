const mongoose = require('mongoose')

const RealmSchema = mongoose.Schema({
    name: {
        human: { type: String },
        slug: { type: String, required: true, unique: true }
    }
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
})

RealmSchema.virtual('display').get(function() {
    return this.name.human || this.name.slug
})

module.exports = mongoose.model('Realm', RealmSchema)
