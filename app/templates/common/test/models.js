var expect = require('chai').expect,
    Home   = require('../models/viewmodels/home');

describe('HomeModel', function(){
  it('should initialize properly', function(){
    var home = Home();
    expect(home.title).to.be.equal('Hello world!');
  });
});