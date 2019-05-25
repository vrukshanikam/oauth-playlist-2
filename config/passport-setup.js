const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User =  require('../models/user-model');

passport.serializeUser((user, done)=>{
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
    User.findById(id).then((user)=>{
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        //options for the google strategy
        clientID: '414832118642-mb7fuhl7v1e6vhqta6d8dm3id4tam6pq.apps.googleusercontent.com',
        clientSecret: 'RDTgSn28uZeReD11K7ebU1fL',
        callbackURL: 'https://oauth-playlist-2015.herokuapp.com/auth/google/redirect'
    },(acessToken, refreshToken, profile, done) =>{
        //check if already exists
        User.findOne({googleId: profile.id}).then((currentUser)=>{
            if(currentUser){
                //already exists
                done(null, currentUser);
            }else{
                new User({
                    username: profile.displayName,
                    googleId: profile.id,
                    thumbnail: profile._json.image.url
                    //email
                }).save().then((newUser)=>{
                    done(null, newUser);
                });
            }
        });
        
    })
)

