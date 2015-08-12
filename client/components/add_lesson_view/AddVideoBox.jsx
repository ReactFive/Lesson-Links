var React = require('react');
var Reflux = require('reflux');
var AddLessonStore = require('../../stores/AddLessonStore.js');

var AddVideoBox = React.createClass({


    getInitialState: function(){
      return {
        lessonTitle: '',
        lessonURL: '',
        lessonLink: ''      
      }
    },

    onInputChange: function(e){
      this.setState({lessonTitle: React.findDOMNode(this.refs.lessonTitle).value})
      this.setState({lessonURL: React.findDOMNode(this.refs.lessonURL).value})
      this.setState({lessonLink: React.findDOMNode(this.refs.lessonLink).value})
    },

    handleSubmit: function(e){
      e.preventDefault();
      debugger;
    },
    
  render: function() {
    return (
      <div>
        <div id="addvideo-box" >
          <form className="lessonInputFields">
            <input 
              className="add-lesson-info"
              type="text" 
              placeholder="What is the name of your new Lesson?"
              ref="lessonTitle" 
              value={this.state.lessonTitle}
              onChange={this.onInputChange}></input>
            <input 
              className="add-lesson-info"
              type="url" 
              placeholder="Input your video URL here. We currently only support YouTube videos." 
              name="newVideoUrl" ref="lessonURL" 
              value={this.state.lessonURL}
              onChange={this.onInputChange}></input>
            <h1>www.lesson-links.com/api/lesson/</h1>
            <input 
              type="text" 
              placeholder="Customize your Lesson Link." 
              name="newVideoUrl" 
              ref="lessonLink" 
              value={this.state.lessonLink}
              onChange={this.onInputChange}></input> 
            <button
              type="submit" 
              className="btn btn-primary" 
              onClick={this.handleSubmit}>Save & Continue</button>
          </form>
        </div>

        <div>
          <h1> Results </h1>
          {this.state.lessonTitle}
          {this.state.lessonURL}
          {this.state.lessonLink}
        </div>
      </div>
    );
  }

});

module.exports = AddVideoBox;