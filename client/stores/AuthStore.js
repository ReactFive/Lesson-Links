var React = require('react')
var Reflux = require('reflux');
var Api = require('../utils/api');
var Identity = require('../utils/identity.js');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Navigation = ReactRouter.Navigation;
var _ = require('lodash');

module.exports = Reflux.createStore({
  mixins: [Navigation],
  listenables: [Actions],

  init: function(){
    this.auth = {
      user: false,
      loggedIn: false,
      authorized: false
    };
  },

  onAuthenticate: function(){
    var user = Identity().currentUser;
    if (user._id){
      this.auth.loggedIn = true;
      this.onGetUser();
      this.triggerChange();
    }
    return Api.getStatus()
    .then(function (res) {
      if (res.data) {
        this.auth.loggedIn = res.data;
        this.triggerChange();
      } else {
        this.auth.loggedIn = false;
        this.triggerChange();
      }
    }.bind(this));
  },

  onGetUser: function(callback){

    return Api.getUser()
    .then(function (res) {
      if (res.data.user) {
        console.log('fetched user')
        this.auth.user = res.data.user;
        this.triggerChange();
        callback()
      } else {
        this.auth.user = false;
        this.triggerChange();
      }
    }.bind(this));
  },

  onLogin: function (payload) {
    return Api.login(payload.email, payload.password)
    .then(function(res){
      this.auth.user = res.data.user;
      this.auth.loggedIn = true;
      this.triggerChange();
      payload.sourceComponent.transitionTo('/library');
      toastr.options.fadeOut = 1000;
      toastr["success"]("Welcome back to Lesson Links " + res.data.user.local.name);
    }.bind(this))
    .catch(function(res){
      if (res.headers.status === 401 || res.data === "Unauthorized") {
        toastr["error"]("The username and password did not match");
      } else {
        toastr["error"]("There was a problem logging you in");
      }
      this.triggerChange();
    }.bind(this));
  },

  onLogout: function(){
    this.auth.user = null;
    this.auth.loggedIn = false;
    delete window.currentUser;
    this.triggerChange();
    toastr["success"]("You have logged out");
    return Api.logout();
  },

  onSignup: function(name, email, password){
    return Api.signup(name, email, password)
      .then(function(res){
        this.auth.user = res.data.user;
        this.auth.loggedIn = true;
        this.triggerChange();
        toastr["success"]("Welcome to Lesson Links " + res.data.user.local.name);
      }.bind(this))
      .catch(function(res){
        toastr["error"]("Sorry, there was a problem registering you");
        this.triggerChange();
      }.bind(this));
  },

  triggerChange: function(){
    this.trigger(this.auth);
  }
});
