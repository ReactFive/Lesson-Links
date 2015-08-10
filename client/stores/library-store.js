var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function(){},

  updateUser: function(){
    return Api.getUser()
    .then(function(res){
      this.user = res.data.user.local
      this.triggerChange();
    })
    .catch(function(res){
      if (res.headers.status === 401 || res.data === "Unauthorized") {
        toastr["error"]("The username and password did not match");
      } else {
        toastr["error"]("There was a problem refreshing the page");
      }
      this.triggerChange();
    }.bind(this));
  }
})