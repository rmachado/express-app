'use strict';

// Import some models here
//var Item = require('../models/item');
var Home = require('../models/viewmodels/home');

module.exports = function(app){

  return {

    index: function(req, res){
      res.render('home', Home());
    }

  };
};