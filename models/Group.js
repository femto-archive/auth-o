const mongoose = require('mongoose')

const GroupSchema = mongoose.Schema({
    name: {
        human: { type: String, required: true, unique: true },
        slug: { type: String, required: true, unique: true }
    }
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
})

GroupSchema.virtual('display').get(function() {
    return this.name.human || this.name.slug
})

module.exports = mongoose.model('Group', GroupSchema)
