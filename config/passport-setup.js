const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        //options for the google strategy
        callbackURL: 'https://oauth-playlist-2015.herokuapp.com/auth/google/redirect',
        clientID: '414832118642-mb7fuhl7v1e6vhqta6d8dm3id4tam6pq.apps.googleusercontent.com',
        clientSecret: 'RDTgSn28uZeReD11K7ebU1fL'
    },() =>{
        //passport callback function
    })
);