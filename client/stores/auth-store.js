var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');
var $ = require('jquery');

module.exports = Reflux.createStore({
  listenables: [Actions],
  login: function (email, password) {
    var em = email;
    var pd = password;
    if (localStorage.token) {
      this.user = email;
      this.triggerChange();
    } else {
      Api.fakeLogin(email, password, function(err, res) {
        if (res.err) {
          console.log(err);
          return null;
        }
        else {
          this.user = res.email;
        }
      }.bind(this));
      this.triggerChange();
    }
  },
  triggerChange: function(){
    this.trigger('change', this.user);
  }
});

  onLogin(email, password){
    Api.login(email, password)
  },

  triggerChange: function(){
    this.trigger('change', this.loggedIn);
  }
})