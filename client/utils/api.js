var React = require('react');
//var fetch = require('whatwg-fetch');

module.exports = {
  fakeLogin: function(email, password, cb){
    var response = {};
    if (email === "richard.vancamp@gmail.com" && password === "rick"){
      response.email = "richard.vancamp@gmail.com";
      cb(response.email);
    } else {
      var error = "not authorized";
      cb(response.error);
    }
  }
};