const express = require('express')

const Consumer = require('../modules/Consumer')
const HTTPRealm = require('./HTTPRealm')

class HTTPConsumer {
    constructor() {
        this.consumer = new Consumer()
        this.router = express.Router()

        this.router.get('/realm/:realm/consumer', HTTPRealm.ensureRealmExists, this.getConsumers.bind(this))
        this.router.get('/realm/:realm/consumers', HTTPRealm.ensureRealmExists, this.getConsumers.bind(this))
        this.router.post('/realm/:realm/consumer', HTTPRealm.ensureRealmExists, this.addConsumer.bind(this))
        this.router.get('/realm/:realm/consumer/:consumer', HTTPRealm.ensureRealmExists, this.getConsumer.bind(this))
        this.router.put('/realm/:realm/consumer/:consumer', HTTPRealm.ensureRealmExists, this.updateConsumer.bind(this))
        this.router.delete('/realm/:realm/consumer/:consumer', HTTPRealm.ensureRealmExists, this.removeConsumer.bind(this))
    }

    async getConsumers(req, res) {
        res.json(await this.consumer.getConsumers({ realm: req.params.realm }))
    }

    addConsumer(req, res) {
        
        this.consumer.createConsumer(req.params.realm, {
            name: req.body.name, 
            secret: req.body.secret, 
            uri: req.body.uri
        }, function(params) {
            params.initial = {
                realm_id: req.params.realm, 
                consumer_id: req.params.consumer
            }
            res.json(params)
        })
    }
    getConsumer(req, res) {
        this.consumer.getConsumer(req.params.realm, req.params.consumer, function(params) {
            params.initial = {
                realm_id: req.params.realm, 
                consumer_id: req.params.consumer
            }
        	res.json(params)
        })
    }
    updateConsumer(req, res) {
        updateConsumer(req.params.realm, req.params.consumer, {}, function(params) {
            params.initial = {
                realm_id: req.params.realm, 
                consumer_id: req.params.consumer
            }
            res.json("Update:", "Maybe")
        })
    }
    removeConsumer(req, res) {
    	this.consumer.removeConsumer(req.params.realm, req.params.consumer, function(params) {
            params.initial = {
                realm_id: req.params.realm, 
                consumer_id: req.params.consumer
            }
            res.json(params)
    	})
    }
}

module.exports = HTTPConsumer
