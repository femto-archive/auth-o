const express = require('express')

const Consumer = require('../modules/Consumer')

class HTTPConsumer {
    constructor() {
        this.consumer = new Consumer()
        this.router = express.Router()

        this.router.get('/realm/:realm/consumer/:consumer', this.getConsumer.bind(this))
        this.router.post('/realm/:realm/consumer/:consumer', this.addConsumer.bind(this))
        this.router.delete('/realm/:realm/consumer/:consumer', this.removeConsumer.bind(this))
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
    addConsumer(req, res) {
    	this.consumer.createConsumer(req.params.realm, req.params.consumer, {}, function(params) {

    	})
    }
    removeConsumer(req, res) {
    	this.consumer.removeConsumer(req.params.realm, req.params.consumer, function(params) {

    	})
    }
}

module.exports = HTTPConsumer
