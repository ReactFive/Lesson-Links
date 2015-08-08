var React = require('react');

var LibLessonPreview = require('./lib-lesson-preview.jsx');

var LibLessonLock = require('./lib-lesson-lock.jsx')

var LibLessonEntry = React.createClass({
  render:function(){
    return (
      <div id="lib-lesson-entry">
        <LibLessonPreview lessons = {this.props.lessons} />
        <LibLessonLock />
      </div>
    )
  }
});

module.exports = LibLessonEntry;