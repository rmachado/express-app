'use strict';

var express = require('express');

module.exports = function(app){

  // Load and initialize all controllers
  var controllers = require('../controllers')(app);
  var home = controllers.home;

  // Set up a router
  var router = express.Router();

  router.route('/')
    .all(home.index);

  app.use('/', router);
};