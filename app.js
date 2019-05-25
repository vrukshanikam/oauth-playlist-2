const express = require('express'); 
const authRoutes = require('./routes/auth-routes'); 
const profileRoutes = require('./routes/profile-routes'); 

const passportSetup = require('./config/passport-setup');

const mongoose = require('mongoose');

const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();

//set up view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ['I am awesome']
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI,()=>{
    console.log('connected');
});

app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);

app.get('/',(req,res) => {
    res.render('home',{user:req.user});

});
app.listen((process.env.PORT || 500),() =>{
    console.log('app is now listening to 500');
});

