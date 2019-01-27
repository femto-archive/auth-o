const express = require('express')

const Realm = require('../modules/Realm')

class HTTPRealm {
    constructor() {
        this.router = express.Router()

        this.router.get('/realm', this.getRealms.bind(this))
        this.router.post('/realm', this.addRealm.bind(this))
        this.router.get('/realms', this.getRealms.bind(this))
        this.router.get('/realm/:realm', HTTPRealm.ensureRealmExists, this.getRealm.bind(this))
        this.router.delete('/realm/:realm', HTTPRealm.ensureRealmExists, this.removeRealm.bind(this))
    }

    static async ensureRealmExists(req, res, next) {
        const realm = await Realm.getRealm(req.params.realm)
        if (realm.isError) return res.json(realm)

        req.realm = realm
        next()
    }

    async getRealms(req, res) {
        const realms = await Realm.getRealms()
        res.json(realms)
    }

    async getRealm(req, res) {
        const realm = await Realm.getRealm(req.params.realm)
        res.json(realm)
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
