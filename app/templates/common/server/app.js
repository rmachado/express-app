'use strict';

var express    = require('express'),
    mongoose   = require('mongoose'),
    config     = require('../config'),
    routes     = require('./routes'),
    middleware = require('./middleware');

var app = express();

module.exports.run = function(){
  console.log('Connecting to ', config.db.uri);
  mongoose.connect(config.db.uri);

  mongoose.connection
    .once('open', function callback () {
      start_app();
    })
    .on('error', console.trace);
};

var start_app = function(){

  // Save configuration within the express object
  app.set('config', config);

  // Load routes
  routes(app);

  // Then load the middleware
  middleware(app, config);

  var port = process.env.port || config.server.port;
  app.listen(port);
  console.log('App started and listening port ', port);
};