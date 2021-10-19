let express = require('express');
let router = express.Router();
let contactControllers = require('../controllers/contact')

let passport = require('passport')

// Helper fuction for guard porpuses

function requireAuth(req, res, next)
{
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

/* GET contact list */
router.get('/', requireAuth, contactControllers.displayContactList) 

/* GET update contact */
router.get('/update/:id', requireAuth, contactControllers.displayContact)

/* POST update contact */
router.post('/update/:id', requireAuth, contactControllers.updateContact)

/* POST delete contact */
router.get('/delete/:id', requireAuth, contactControllers.deleteContact)

module.exports = router;
