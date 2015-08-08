var React = require('react');

var LibLessonPreview = require('./lib-lesson-preview.jsx');


var LibLessonEntry = React.createClass({
  render:function(){
    return (
      <div id="lib-lesson-entry">
        <LibLessonPreview lessons = {this.props.lessons} />
      </div>
    )
  }
});

module.exports = LibLessonEntry;