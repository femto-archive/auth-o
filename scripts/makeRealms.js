const mongoose = require('mongoose')
const config = require('@femto-host/config')
const errors = require('@femto-host/errors')

global.Errors = errors('../errors.json')

const Realm = require('../modules/Realm')

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://' + config.get('databaseuri') + '/' + config.get('database'))

;(async () => {
    await Realm.createRealm({
        name: {
            slug: 'default',
            human: 'Default'
        }
    })

    await Realm.createRealm({
        name: {
            slug: 'custom-realm',
            human: 'Custom Realm'
        }
    })

    await Realm.createRealm({
        name: {
            slug: 'custom-realm-2',
            human: 'Custom Realm 2'
        }
    })
})()

