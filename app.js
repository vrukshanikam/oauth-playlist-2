const express = require('express'); //importing the express package ot the const

const authRoutes = require('./routes/auth-routes'); //importing routes

const passportSetup = require('./config/passport-setup');

const app = express(); //instantiate app.js with express?
//basically including express in app.js?

//set up view engine
app.set('view engine', 'ejs');

//set up routes
app.use('/auth',authRoutes); //when the user goes to /auth/(something) /auth/login or logout or google

//create home route, // if I type in honeys-macbook-local, render me to the home page
app.get('/',(req,res) => {
    res.render('home');

});
app.listen((process.env.PORT || 4000),() =>{
    console.log('app now listening to 4000');
});