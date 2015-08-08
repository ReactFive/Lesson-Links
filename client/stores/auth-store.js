var Reflux = require('reflux');
var Api = require('../util/api');
var Actions = require('../actions');
var _ = require('lodash');
var $ = require('jquery');

module.exports = Reflux.createStore({
  listenables: [Actions],

  onLogin(email, password){
    var data = JSON.stringify({email:email, password:password});
    var url = 'http://localhost:3000/api/login';
    
    
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      data: data,
      success: function(data) {
        console.log('logged in')
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },

  triggerChange: function(){
    this.trigger('change', this.loggedIn);
  }
})