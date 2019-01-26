const express = require('express')

const Consumer = require('../modules/Consumer')

class HTTPConsumer {
    constructor() {
        this.consumer = new Consumer()
        this.router = express.Router()

        this.router.get('/realm/:realm/consumer', this.getConsumers.bind(this))
        this.router.get('/realm/:realm/consumers', this.getConsumers.bind(this))
        this.router.post('/realm/:realm/consumer', this.addConsumer.bind(this))
        this.router.get('/realm/:realm/consumer/:consumer', this.getConsumer.bind(this))
        this.router.put('/realm/:realm/consumer/:consumer', this.updateConsumer.bind(this))
        this.router.delete('/realm/:realm/consumer/:consumer', this.removeConsumer.bind(this))
    }

    getConsumers(req, res) {
        this.consumer.getConsumers(req.params.realm, function(params) {
            params.initial = {
                realm_id: req.params.realm, 
                consumer_id: req.params.consumer
            }
            res.json(params)
        })
    }
    addConsumer(req, res) {
        this.consumer.createConsumer(req.params.realm, {name: req.body.name, 
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
