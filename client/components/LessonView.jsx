var React = require('react');
var VideoBox = require('./VideoBox.jsx');
var Content = require('./Content.jsx');
var _ = require('lodash');
var Actions = require('../Actions')

var LessonStore = require('../Stores/lesson-store');

var LessonView = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },
  componentWillMount: function() {
    console.log(this.context.router.getCurrentParams().url)
    LessonStore.fetchLesson(this.context.router.getCurrentParams().url)
  },
  render: function() {
    return (
        <div className="container">
          <div id='lesson-view'>
            <VideoBox />
            <Content/>
          </div>
        </div>
    );
  }
});

module.exports = LessonView;