var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var $ = require('jquery');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],
  init: function() {
    /*this.token =

    if (this.token === null){
      return null;
    }

    this.user = JSON.parse(this.token);
    this.error = false; */
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
    // fake API simulation
    setTimeout(function() {
      var auths = require('./authStore.userData.json');
      Actions.login.completed(auths[`${email}:${password}`]);
    }, renderTimeout);
  },

  // Calls util/api.login to ping server with email/login info. Returns an object with all the user data
 /* onLogin(email, password){
    Api.login(email, password)
  },*/


 onLoginCompleted(authResponse){
   if(authResponse) {
     this.token = authResponse.user;
     this.user = authResponse.user;
     //localStorage.setItem('apiToken', this.token);
   } else {
     this.error = "Username or password invalid."
   }
   this.changed();
 }, 

  triggerChange: function(){
    this.trigger('change', this.loggedIn);
  }
})
