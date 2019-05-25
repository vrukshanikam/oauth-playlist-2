const express = require('express'); 
const authRoutes = require('./routes/auth-routes'); 

const passportSetup = require('./config/passport-setup');

const mongoose = require('mongoose');

const keys = require('./config/keys');
//const cookieSession = require('cookie-session');
//const passport = require('passport');

const app = express();

//set up view engine
app.set('view engine', 'ejs');

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI,()=>{
    console.log('connected');
});

app.use('/auth',authRoutes);

app.get('/',(req,res) => {
    res.render('home');

});
app.listen((process.env.PORT || 500),() =>{
    console.log('app is now listening to 500');
});

