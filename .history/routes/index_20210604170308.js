/*
File Name: contact.css
Name: Janakan Sivananthan
Student Id: 301048429
Date: June 4 2021
*/
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
  res.render('about', { title: 'About Me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET Service page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
