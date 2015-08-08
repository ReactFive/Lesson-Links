var Reflux = require('reflux');
var Api = require('../util/api');
var Actions = require('../actions');
var _ = require('lodash');
var $ = require('jquery');

module.exports = Reflux.createStore({
  listenables: [Actions],

  onLogin(email, password){
    Api.login(email, password)
  },

  triggerChange: function(){
    this.trigger('change', this.loggedIn);
  }
})