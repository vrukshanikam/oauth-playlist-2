const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        //options for the google strategy
        callbackURL: 'https://oauth-playlist-2015.herokuapp.com',
        clientID: 'keys.google.clientID',
        clientSecret: 'keys.google.clientSecret'

    },() =>{
        //passport callback function

    })
)