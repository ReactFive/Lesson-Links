var React = require('react');
var VideoBox = require('./VideoBox.jsx');
var Content = require('./Content.jsx');
var _ = require('lodash');
var Actions = require('../../actions');
var LessonStore = require('../../stores/lesson-store.js');
var Reflux = require('reflux');


var LessonView = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },
  componentWillMount: function(){
     console.log(this.props.params.url)
     console.log(this.context.router.getCurrentParams().url);
    Actions.fetchLesson(this.props.params.url)
  },
  render: function() {
    return (
        <div>
          <div id='lesson-view2'>
            <VideoBox />
            <Content/>
          </div>
        </div>
    );
  }
});

module.exports = LessonView;