// Auth-O main file 

// Module imports 
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
const config = require('@femto-host/config')
const MongoStore = require('connect-mongo')(expressSession)
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const flash = require('express-flash')
const mongoose = require('mongoose')
const favicon = require('serve-favicon')
const express = require('express')
const reload = require('reload')
const path = require('path')

const API_v1 = require(path.resolve("./modules/API_v1"))

// Main function 
;(async () => {
    const app = express()
    //const passport = new Passport()

    const db = (await MongoClient.connect('mongodb://' + config.get('databaseuri') + '/', { useNewUrlParser: true })).db(config.get('database'))
    mongoose.connect('mongodb://' + config.get('databaseuri') + '/' + config.get('database'), { useNewUrlParser: true })

    app.use(favicon(path.join(__dirname, 'public', 'favicon', 'favicon.ico')))
    app.set('view engine', 'pug')
    app.set('views', 'renders/views')
    app.use(express.static('public'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(cookieParser(process.env.PG_SECRET || config.get('secret')))
    app.use(expressSession({
        secret: process.env.PG_SECRET || config.get('secret'),
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ db }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 5 // 35 days
        }
    }))
    app.use(flash())
    app.use((req, res, next) => {
        /*
        Object.assign(res.locals, {
            success: req.flash('success'),
            error: req.flash('error')
        })
        */
        //res.locals.req = req
        res.locals.development = process.env.NODE_ENV === 'development'
        app.locals.pretty = process.env.NODE_ENV === 'development'
        res.locals.path = req.path
        next()
    })

    // API routes 
    app.use("/api/v1", API_v1)

    reload(app)

    app.listen(config.get('port'), () => console.log(`Listening on port ${config.get('port')}`))
})()

