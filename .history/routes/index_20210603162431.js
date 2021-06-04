var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Janakan Sivananthan' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Janakan Sivananthan' });
});

/* GET About me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/project', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET Service page. */
router.get('/service', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;
