let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Contact = require('../models/contact');


/* GET contact list */
module.exports.displayContactList = (req, res, next) => {
    /* sort to sort contacts alphabetically */
    Contact.find({}).sort('name').exec((err, contactList) => {
        if(err){
            console.error(err)
            return console.error(err);
        }
        else {
            res.render('contact/list', 
            {title: "Contact List", ContactList: contactList,
            displayName: req.user ? req.user.displayName : ''
        })
        }
    });
};

/* GET update contact */
module.exports.displayContact = (req, res, next) => {
    let id = req.params.id;
    Contact.findById(id, (err, contact) => {
        if(err)
        {
            console.log(err)
            return console.error(err)
        }
        else {
            res.render('contact/update', {
                title: "Update", 
                Contact: contact, 
                displayName: req.user ? req.user.displayName : ''})
        }
    });
};

/* POST update contact */
module.exports.updateContact = (req, res, next) => {
    let id = req.params.id
    console.dir(req.body);
    let updatedContact = Contact({
        "_id": id,
        "name": req.body.name,
        "phoneNumber": req.body.phone,
        "emailAddress": req.body.email
    });
    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contacts')
        }
    })
};

/* POST delete contact */
module.exports.deleteContact = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/contacts')
        }
    })
};
