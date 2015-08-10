var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function(){},

  authenticate: function(){
    return Api.getStatus()
    .then(function(res){
      if (res) {
        console.log("authentication service says: " + res.data);
        this.loggedIn = res.data;
        this.triggerChange();
      }
    }.bind(this));
  },

  login: function (email, password) {
    return Api.login(email, password)
    .then(function(res){
      this.user = res.data.user;
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
    this.triggerChange();
    toastr["success"]("You have logged out");
    return Api.logout();
  },

  triggerChange: function(){
    this.trigger('change', this.loggedIn);
  }

});
