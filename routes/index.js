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
  res.render('index', { title: 'Skills' });
});
/* GET contact me page. */
router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

module.exports = router;
