var React = require('react');
var AddVideoBox = require('./AddVideoBox.jsx');
var _ = require('lodash');

var LessonStore = require('../../stores/lesson-store.js');

var AddLessonView = React.createClass({
  render: function() {
    return (
      <div className="addwrapper">
          <div className='add-lesson-view'>
            <AddVideoBox />
          </div>
      </div>
    );
  }
});

module.exports = AddLessonView;