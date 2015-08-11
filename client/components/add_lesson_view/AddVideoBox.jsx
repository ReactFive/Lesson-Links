var React = require('react');
var Reflux = require('reflux');
var AddLessonStore = require('../../stores/AddLessonStore.js');

var AddVideoBox = React.createClass({

  render: function() {
    return (
      <div>
        <div id="addvideo-box" >
          <h1>
            <input type="text" placeholder="What is the name of your new Lesson?" className="add-lesson-info"></input>
          </h1>
          <input type="url" className="add-lesson-info"placeholder="Input your video URL here. We currently only support YouTube videos." name="newVideoUrl"></input>
        </div>
        <div className="addless-button-container">
          <button className="add-lesson-button">Save & Edit</button>
          <button className="add-lesson-button">Reset Fields</button>
        </div>
      </div>
    );
  }

});

module.exports = AddVideoBox;