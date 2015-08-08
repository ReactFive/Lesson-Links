var React = require('react');

module.exports.login = function(email, password) {
  var url = 'http://localhost:3000/api/login';
  var data = {email:email, password:password};

  $.post( url, data, function( data ) {
    console.log( data ); // John
  }, "json");
}

module.exports.signup = function(email, password) {
  var url = 'http://localhost:3000/api/signup';
  var data = {email:email, password:password};

  $.post( url, data, function( data ) {
    console.log( data ); // John
  }, "json");
}
