const express = require('express')

const Consumer = require('../modules/Consumer')

class HTTPConsumer {
    constructor() {
        this.consumer = new Consumer()
        this.router = express.Router()

        this.router.get('/', this.getConsumer.bind(this))
    }

    getConsumer(req, res) {
        res.json({ hello: 'world' })
    }
}

module.exports = HTTPConsumer