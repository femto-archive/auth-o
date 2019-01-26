const express = require('express')

const Realm = class Realm {} || require('../modules/Realm')

class HTTPRealm {
    constructor() {
        this.realm = new Realm()
        this.router = express.Router()

        this.router.get('/realms', this.getRealms.bind(this))
        this.router.get('/realm/:realm', this.getRealm.bind(this))
        this.router.post('/realm/:realm', this.addRealm.bind(this))
        this.router.delete('/realm/:realm', this.removeRealm.bind(this))
    }

    getRealms(req, res) {
        res.json({
            data: [{
                _id: '4g3qj98gjq',
                name: {
                    slug: 'example-realm',
                    human: 'Example Realm'
                }
            }, {
                _id: '4g3qj98gjq2',
                name: {
                    slug: 'example-realm-2',
                    human: 'Example Realm 2'
                }
            }, {
                _id: '4g3qj98gjq3',
                name: {
                    slug: 'example-realm-3',
                    human: 'Example Realm 3'
                }
            }]
        })
    }

    getRealm(req, res) {
        res.json({
            data: {
                _id: '4g3qj98gjq',
                name: {
                    slug: 'example-realm',
                    human: 'Example Realm'
                }
            }
        })
    }

    addRealm(req, res) {
        res.json({
            data: {
                msg: `Successfully added realm ${req.params.realm}.`
            }
        })
    }

    removeRealm(req, res) {
        res.json({
            data: {
                msg: `Successfully removed realm ${req.params.realm}.`
            }
        })
    }
}

module.exports = HTTPRealm