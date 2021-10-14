var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About me' });
});
/* GET projects me page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});
/* GET services me page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
/* GET contact me page. */
router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});
/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login' });
});
/* GET login page. */
router.get('/list', function(req, res, next) {
  res.render('index', { title: 'List' });
});
/* GET login page. */
router.get('/update', function(req, res, next) {
  res.render('index', { title: 'Update' });
});

module.exports = router;
