'use strict';

module.exports = function(hbs){

  // Load all partials in views/partials
  hbs.registerPartials(__dirname + '../views/partials');

  // Here you define your Handlebars helpers
};