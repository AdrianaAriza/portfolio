let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Contact = require('../models/contact');


/* GET contact list */
router.get('/', (req, res, next) => {
    Contact.find((err, contactList)=>{
        if(err){
            return console.error(err);
        }
        else {
            res.render('contact/list', {title: "Contact List", ContactList: contactList})
        }
    });
});

/* GET update contact */
router.get('/update/:id', (req, res, next) => {
    let id = req.params.id;
    Contact.findById(id, (err, contact) => {
        if(err)
        {
            console.log(err)
            return console.error(err)
        }
        else {
            res.render('contact/update', {title: "Update", Contact: contact})
        }
    });
});

/* POST update contact */
router.post('/update/:id', (req, res, next) => {
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
});

/* POST delete contact */
router.get('/delete/:id', (req, res, next) => {
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
});

module.exports = router;