const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : String,
    googleId : String,
    email : String,
    thumbnail: String,
});

const User = mongoose.model('user', userSchema); //the model I choose to call user, each of these user is going to be as per the above defined userSchema;

module.exports = User;
