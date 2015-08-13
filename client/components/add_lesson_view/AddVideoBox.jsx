var React = require('react');
var Reflux = require('reflux');
var AddLessonStore = require('../../stores/AddLessonStore.js');
var Actions = require('../../actions.js');
var AddVideoBox = React.createClass({


    getInitialState: function(){
      return {
        title: '',
        video_url: '',
        lesson_url: '',
        published: false      
      }
    },

    onInputChange: function(e){
      this.setState({title: React.findDOMNode(this.refs.title).value})
      this.setState({video_url: React.findDOMNode(this.refs.video_url).value})
      this.setState({lesson_url: React.findDOMNode(this.refs.lesson_url).value})
    },

    handleSubmit: function(e){
      e.preventDefault();
      Actions.createLesson({
        title: this.state.title,
        video_url: this.state.video_url,
        lesson_url: this.state.lesson_url,
        published: this.state.published
      });

    },
    
  render: function() {
    return (
      <div className="col-xs-8 col-xs-offset-2">
        <div id="addvideo-box" className="panel panel-default">
          <div className="panel-body">
          <form className="lessonInputFields">
            
            <div className="form-group">
              <label htmlFor="lesson"><strong>Lesson Title:</strong></label>
              <input
                id="lesson"
                className="form-control"
                type="text" 
                placeholder="What is the name of your new Lesson?"
                ref="title" 
                value={this.state.title}
                onChange={this.onInputChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="video_url"><strong>Video URL:</strong></label>
              <input
                id="video_url"
                className="form-control"
                type="url" 
                placeholder="Input your video URL here. We currently only support YouTube videos." 
                name="newVideoUrl" ref="video_url" 
                value={this.state.video_url}
                onChange={this.onInputChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="lesson_url"><strong>www.lesson-links.com/api/lesson/</strong></label>
              <input
                id="lesson_url"
                className="form-control"
                type="text" 
                placeholder="Customize your Lesson Link." 
                name="newVideoUrl" 
                ref="lesson_url" 
                value={this.state.lesson_url}
                onChange={this.onInputChange} />
            </div>
            <button
              type="submit" 
              className="btn btn-primary" 
              onClick={this.handleSubmit}>Save & Continue</button>
          </form>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = AddVideoBox;