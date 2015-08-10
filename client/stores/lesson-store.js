var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function() {

    this.lesson = {
      comments: []
    }
    var self = this;
    Api.getLesson()
    .then(function(res) {
      self.lesson = res.data[0];
      console.log(self.lesson);
      self.trigger(self.lesson);
    })
    .catch(function(res) {
      console.log(res);
    })
  }

  // change: function(){
  //   this.trigger('change', this.loggedIn);
  // }
})