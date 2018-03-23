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

/// Authorization Endpoints
// GET - /api/auth/login - Invokes the authenticate method on passport.
// GET - /api/auth/setUser - Sets the user information on the session.
// GET - /api/auth/authenticated - Checks for the user object on session.
// POST - /api/auth/logout - Destroys the session and sends a status of 200.

/// Friend Endpoints
// GET - /api/friend/list
// POST - /api/friend/add
// POST - /api/friend/remove 

/// User Endpoints
// PATCH - /api/user/patch/:id
// GET - /api/user/list  // Returns a list of 24 users
// GET - /api/user/search  // Return all users that meet the search criteria.

/// Recommended Endpoints
// POST - /api/recommended
// POST - /api/recommended/add


// Launch Server
app.listen(SERVER_PORT, () => (console.log(`Simmin on port: ${SERVER_PORT}`)))
