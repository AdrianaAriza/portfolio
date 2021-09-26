var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Welcome to the Home page' });
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About me' });
});
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});
router.get('/contactme', function(req, res, next) {
  res.render('index', { title: 'Cantact' });
});

module.exports = router;
