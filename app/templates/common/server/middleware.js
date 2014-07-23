'use strict';

var express        = require('express'),
    path           = require('path'),
    hbs            = require('hbs'),
    logger         = require('morgan'),
    compress       = require('compression'),
    favicon        = require('serve-favicon'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler   = require('errorhandler'),
    lessMiddleware = require('less-middleware');

// Load handlebars helpers and partials
require('./hbs-helpers')(hbs);

module.exports = function(app, config){
  
  app.set('view engine', 'html');
  app.engine('html', require('hbs').__express);
  app.set('views', 'views');

  app
    .use(compress())
    .use(favicon(path.join(config.static.dest, 'favicon.ico')))
    .use(logger('dev'))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(methodOverride())
    .use(lessMiddleware('/less', {
      dest: '/css',
      pathRoot: config.static.dest
    }))
    .use(express.static(config.static.dest))
    .use(function (req, res) {
      res.status(404).render('404', {title: 'Not Found'});
    });

  if (app.get('env') === 'development') {
    app.use(errorHandler());
  }
};