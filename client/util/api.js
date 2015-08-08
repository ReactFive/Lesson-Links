var React = require('react');
var $ = require('jquery')
var request = require('request');
//var fetch = require('whatwg-fetch');

module.exports.login = function(email, password) {
  var url = 'http://localhost:3000/api/login';
  var data = {email:email, password:password};

  $.post( url, data, function( data ) {
    console.log( data ); // John
  }, "json");
}
