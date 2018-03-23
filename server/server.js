require('dotenv').config()
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const massive = require('massive')

const app = express()

// Destructuring .env file
const { SERVER_PORT, CONNECTION_STRING } = process.env

// Top Level middleware
// app.use(session({
//     secret: SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// Database Connection
massive(CONNECTION_STRING).then(db => {app.set('db', db)})

// Endpoint
app.get('/api/test', (req, res)=>{
    res.status(200).send('Hit me')
})


// Launch Server
app.listen(SERVER_PORT, () => (console.log(`Simmin on port: ${SERVER_PORT}`)))
