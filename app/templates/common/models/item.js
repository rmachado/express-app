'use strict';

var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  name: String,
  description: String,
  price: Number
});

module.exports = mongoose.model('Item', itemSchema);