'use strict';

// TODO: Import all the js files in this dir

module.exports = function(app){
  return {
    home: require('./home')(app)
  };
};