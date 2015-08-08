var Reflux = require('reflux');
var Api = require('../util/api');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
  listenables: [Actions],

  triggerChange: function(){
    this.trigger('change', this.loggedIn);
  }
})