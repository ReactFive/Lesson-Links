var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
//var userCtrl = require('../server/controllers/userCtrl');

chai.should();

function isEven(num){
  return num % 2 === 0;
};

describe('User Controller Tests', function(){

  describe('isEven', function() {
    it('should return true when a number is even', function() {
      isEven(4).should.be.true;
    });
  });
/*
  describe('Login', function(){
    it('should not allow invalid login credentials', function(){
      var req = {
        _id: "3940234234234233424"
      };
      var res = {
        status: sinon.spy(),
        send: sinon.spy()
      };
      userCtrl.loginUser(req, res);
      res.status.calledWith(401).should.equal(true, "Bad login request " + res.status.args[0][0]);
      res.send.calledWith('Unauthorized').should.equal(true);
    })
    */
  })
