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
  },

  authenticate: function(){
    var name = _.findKey(Identity().currentUser, function(obj){
      return obj._id;
    });
   if(name){
      console.log("authenticated as: ", Identity().currentUser);
      this.loggedIn = true;
      this.user = Identity().currentUser;
      this.triggerChange();
    } else {
      return Api.getStatus()
        .then(function (res) {
          if (res) {
            this.loggedIn = res.data;
            this.triggerChange();
          }
        }.bind(this));
    }
  },

  login: function (email, password) {
    return Api.login(email, password)
    .then(function(res){
      this.user = res.data.user.local;
      this.loggedIn = true;
      this.triggerChange();
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

  logout: function(){
    this.user = null;
    this.loggedIn = false;
    delete window.currentUser;
    console.log("deleted ", Identity().currentUser);
    this.triggerChange();
    toastr["success"]("You have logged out");
    return Api.logout();
  },

  signup: function(name, email, password){
    return Api.signup(name, email, password)
      .then(function(res){
        this.user = res.data.user.local;
        this.triggerChange();
        toastr["success"]("Welcome to Lesson Links " + res.data.user.local.name);
      }.bind(this))
      .catch(function(res){
        console.log("catch:", res);
        toastr["error"]("Sorry, there was a problem registering you");
        this.triggerChange();
      }.bind(this));
  },

  triggerChange: function(){
    this.trigger('change', this.user);
  } 

});
