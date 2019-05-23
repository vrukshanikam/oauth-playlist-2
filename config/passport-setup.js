const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User =  require('../models/user-model');

passport.use(
    new GoogleStrategy({
        //options for the google strategy
        clientID: '414832118642-mb7fuhl7v1e6vhqta6d8dm3id4tam6pq.apps.googleusercontent.com',
        clientSecret: 'RDTgSn28uZeReD11K7ebU1fL',
        callbackURL: 'https://oauth-playlist-2015.herokuapp.com/auth/google/redirect'
    },(accessToken, refreshToken, profile, done) =>{
        //passport callback function
        //accessToken is a token recieved fro google, we can use this token to read emails of the user
        //accessToken expires after a while for which we need refreshToken
        console.log('passport callback function fired');
        console.log('profile');
    })
);

