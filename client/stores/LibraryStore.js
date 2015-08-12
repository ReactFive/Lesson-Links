var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');
var AuthStore = require('./AuthStore')


module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function(){
  },
  redirectLesson: function(){
  }
})