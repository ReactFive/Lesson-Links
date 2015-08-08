var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],
  init: function() {
    this.error = false;
    this.user = {}
  },

  changed: function(){
    this.trigger(this.getState());
  },

  getState: function(){
    return {
      error: this.error,
      user: this.user,
      loggedIn: this.loggedIn()
    }
  },

  loggedIn: function(){
    return this.user !== null;
  },

  getUser: function(){
    return this.user;
  },

  onLogin: function (email, password) {
    var self = this;
    Api.login(email, password)
    .then(function(res){
      console.log(res);
      self.user = res.user;
    })
    .catch(function(res){
      console.log(res);
    });

    this.changed();
  },

  triggerChange: function(){
    this.trigger('change', this.loggedIn);
  }
})
