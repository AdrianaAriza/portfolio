let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let User = require('../models/user');


/* GET contact list */
router.get('/login', (req, res, next) => {
        res.render('contact/list', {
            title: "Contact List", ContactList: contactList
        })
});


module.exports = router;