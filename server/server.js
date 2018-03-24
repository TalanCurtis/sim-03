require('dotenv').config()
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const massive = require('massive')
const bodyParser=require('body-parser');

const app = express()

// Destructuring .env file
const { SERVER_PORT, CONNECTION_STRING , SESSION_SECRET, DOMAIN, CLIENT_ID, CLIENT_SECRET, CALLBACK_URL} = process.env

// Top Level middleware
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Database Connection
massive(CONNECTION_STRING).then(db => {console.log('Database up'); app.set('db', db)})

//////////////////////
///// AUTH 0 /////////
// Setting up passport to use this "strategy"
// passport.use takes in a Contructor Function ({})
passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    // this is where you make a database call
    // serializeUser get called imediatly after done
    //done(null, profile)
    const db = app.get('db');

    const { sub, name, picture } = profile._json;

    db.find_user([sub]).then(dbResponse => {
        if (dbResponse[0]) {
            console.log('find_user: ',dbResponse[0])
            done(null, dbResponse[0].id)
        } else {
            // creates user and sends it back
            db.create_user([name, picture, sub]).then(dbResponse => {
                console.log('create_user: ',dbResponse[0])
                done(null, dbResponse[0].id)
            })
        }
    });
}));
// serializeUser is gets profile passed down from passport.authenticate done(profile)
passport.serializeUser((id, done) => {
    done(null, id)
});

// deserializeUser 
// whatever you pass out through profile shows up on a req.user{}
// this where you 
passport.deserializeUser((id, done) => {
    const db = app.get('db');
    db.find_logged_in_user([id]).then(dbResponse => {
        console.log('deserializeUser: ',dbResponse[0])
        done(null, dbResponse[0])
    })
});

//// Auth 0  Endpoints
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/home'
}))
//////// This enpoint checks to see if user is still loged in
///// put this check on component did mount to see if user still valaid
app.get('/auth/me', (req, res) => {
    if (!req.user) {
        console.log('auth me No User: ', req.user)
        res.status(401).send('user not loged in')
    } else {
        console.log('auth me User: ', req.user)
        res.status(200).send(req.user)
    }
})

app.get('/logout', (req, res)=>{
    req.logout();
    res.status(200).send('logged out')
    // res.redirect('http://localhost:3000/')
} )
//////////////////////
//////////////////////

// Endpoint
app.get('/api/test', (req, res)=>{
    res.status(200).send('Hits')
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
