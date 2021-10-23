/* 
    user.js 
    Luz Adriana Ariza Bustos: 301161864
    23-10-2021
*/

// require modules for the User model
let mongoose = require('mongoose');
const passport = require('passport');
let passportLocalMongoose = require('passport-local-mongoose')

let User = mongoose.Schema(
    {
        username: {
            type: String,
            default: "",
            trim: true,
            require: "username is require"
        },
        /*password: {
            type: 
        }*/
        emial: {
            type: String,
            default: "",
            trim: true,
            require: "email is require"
        },
        displayName: {
            type: String,
            default: "",
            trim: true,
            require: "Display name is require"
        },
        created: {
            type: Date,
            default: Date.now,
        },
        updated: {
            type: Date,
            default: Date.now,
        }
    },

    {
        collections: "users"
    }
);

// configure options for user
let options = ({missingPasswordError: "wrong / Missing Password"});
User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User); //(Model, Object)
