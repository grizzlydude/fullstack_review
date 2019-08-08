require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const PORT = SERVER_PORT || 5555

const app = express()
app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(PORT, () => console.log(`Return of the PORT ${PORT}`))
})

