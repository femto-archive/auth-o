const mongoose = require('mongoose')
const config = require('@femto-host/config')
const errors = require('@femto-host/errors')

global.Errors = errors('../errors.json')

const Realm = require('../modules/Realm')
const Consumer = require('../modules/Consumer')

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://' + config.get('databaseuri') + '/' + config.get('database'))

;(async () => {
    const realm = await Realm.getRealm('default')
    const consumer = new Consumer()

    await consumer.createConsumer({
        name: {
            human: 'Human Consumer 1',
            slug: 'human-consumer-1'
        },
        secret: 'secret-consumer-1',
        redirectURI: 'http://redirect/consumer-1',
        realm: realm
    })

    await consumer.createConsumer({
        name: {
            human: 'Human Consumer 2',
            slug: 'human-consumer-2'
        },
        secret: 'secret-consumer-2',
        redirectURI: 'http://redirect/consumer-2',
        realm: realm
    })

    await consumer.createConsumer({
        name: {
            slug: 'human-consumer-3'
        },
        secret: 'secret-consumer-3',
        redirectURI: 'http://redirect/consumer-3',
        realm: realm
    })
})()

