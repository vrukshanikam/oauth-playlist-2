//all of the authentication routes settles in here
const router = require('express').Router(); //no idea?
const passport = require('passport');

//auth login
router.get('/login',(req,res) =>{
    res.render('login', { user: req.user });
});

//auth logout
router.get('/logout', (req,res) =>{
    //handle with passport 
    res.send('logging out');
});

//auth with google, when the user goes to /auth/google, we wnat passport to take control and send it to google consent screen 
router.get('/google',passport.authenticate('google',{ //in passport-setup we have GoogleStrategy
    scope: ['profile'] //['profile,'email'] etc
}));

// callback route for google to redirect to
router.get('/google/redirect', (req, res) => {
    res.send('you reached the redirect URI');
});

module.exports = router;
