'use strict';
var _ = require('underscore');

var defaultConfig = require('./default');

var env = process.env.NODE_ENV || 'development',
    config = require('./' + env);

_.defaults(config, defaultConfig);

module.exports = config;