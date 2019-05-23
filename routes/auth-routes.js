//all of the authentication routes settles in here
const router = require('express').Router(); //no idea?
const passport = require('passport');

//auth login
router.get('/login',(req,res) =>{
    res.render('login', { user: req.user });
    console.log('logging in');
});

//auth logout
router.get('/logout', (req,res) =>{
    //handle with passport 
    res.send('logging out');
});

//auth with google, when the user goes to /auth/google, we wnat passport to take control and send it to google consent screen 
router.get('/google',passport.authenticate('google',{ //in passport-setup we have GoogleStrategy
    scope: ['profile'] //['profile,'email'] etc
}));//here passport.authenticate takes me to the google login

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
    res.send('you reached the redirect URI');
});//here authenticate.google exchanges the user code for profile information

module.exports = router;
