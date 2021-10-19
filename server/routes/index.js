var express = require('express');
var router = express.Router();

let indexControllers = require('../controllers/index')

/* GET home page. */
router.get('/', indexControllers.displayHomePage);
router.get('/home', indexControllers.displayHomePage);

/* GET about me page. */
router.get('/about', indexControllers.displayAboutPage);

/* GET projects me page. */
router.get('/projects', indexControllers.displayProjectsPage);

/* GET services me page. */
router.get('/services', indexControllers.displayServicesPage);

/* GET contact me page. */
router.get('/contactme', indexControllers.displayContactPage);

/* GET Route for displaying the Register page */
router.get('/register', indexControllers.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexControllers.processRegisterPage);

/* GET login user page */
router.get('/login', indexControllers.displayLoginPage)

/* POST login user page */
router.post('/login', indexControllers.performLogin)

/* POST login user page */
router.get('/logout', indexControllers.performLogout)

module.exports = router;
