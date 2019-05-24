const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User =  require('../models/user-model');

passport.use(
    new GoogleStrategy({
        //options for the google strategy
        clientID: 'keys.google.clientID',
        clientSecret: 'keys.google.clientSecret',
        callbackURL: 'https://oauth-playlist-2015.herokuapp.com/auth/google/redirect'
    },() =>{
        //passport callback 
    })
)

