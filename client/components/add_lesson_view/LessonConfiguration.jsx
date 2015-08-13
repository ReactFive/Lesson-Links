var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');
var AddLessonStore = require('../../stores/AddLessonStore.js');
//var VideoBox = require('./VideoBox.jsx');

var LessonConfiguration = React.createClass({
  mixins: [Reflux.listenTo(AddLessonStore, "lesson")],

  render: function() {
    return null;
  }

});

module.exports = LessonConfiguration;