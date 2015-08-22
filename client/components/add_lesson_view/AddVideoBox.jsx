var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var CreateLessonStore = require('../../stores/CreateLessonStore.js');
var Actions = require('../../actions.js');
var Navigation = Router.Navigation;

var AddVideoBox = React.createClass({
  mixins: [Navigation, Reflux.connect(CreateLessonStore, "result")],

  getInitialState: function(){    
    return {
      title: '',
      video_url: '',
      lesson_url: '',
      published: false,
      result: {
        invalidURL: false,
        invalidYoutubeURL: false,
        createdLesson: false  
      }
    }

  },

  onInputChange: function(e){
    this.setState({title: React.findDOMNode(this.refs.title).value})
    this.setState({video_url: React.findDOMNode(this.refs.video_url).value})
    this.setState({lesson_url: React.findDOMNode(this.refs.lesson_url).value})
  },

  handleSubmit: function(e){
    var self = this;
    e.preventDefault();
    var lesson_url = this.state.lesson_url.replace(/\s+/g, '-');
    Actions.createLesson({
      title: this.state.title,
      video_url: this.state.video_url,
      lesson_url: lesson_url,
      published: this.state.published 
    })
    .triggerPromise()
    .then(function(){
      console.log("Geoffrey's Arguments: ", arguments)
    })
  },

  gotoConfigure: function(e){
    e.preventDefault();
    this.transitionTo('/configure');
  },
    
  render: function() {
    //This error message appears underneath the video URL if it is already in the database
    var errorMessage =  this.state.result.invalidURL ? 
      <div className="invalid-URL-error">
        <p>This URL is taken. Please try a different one.</p>
      </div> : null

    var youtubeErrorMessage =  this.state.result.invalidYoutubeURL ? 
      <div className="invalid-URL-error">
        <p>This is not a valid Youtube URL. Please try a different one.</p>
      </div> : null

    var apo = "'";

    //This success message appears underneath the form when the lesson is successfully saved.
    var successMessage = this.state.result.createdLesson ? 
      <div className="alert alert-success">
        <p><strong>Your lesson has been created!</strong></p>
        <p>Title:  {this.state.title}</p>
        <p>Video:  {this.state.video_url}</p>
        <p>Your lesson{apo}s unique URL:<br/>
        <strong>www.lesson-links.com/{this.state.lesson_url.replace(/\s+/g, '-')}</strong></p>
        <br/>
        <p>Click NEXT to configure your lesson exercises</p>
      </div>
      : null;


    //Once the user successfully creates a lesson, saves it successfully, and clicks 'save',
    //the button changes to 'next' so they can click it to continue to the configure page.
    var button = this.state.result.createdLesson ? 
      <button
        type="submit" 
        className="btn btn-success pull-right"
        onClick={this.gotoConfigure}>Next</button>
      :
      <button
        type="submit" 
        className="btn btn-primary pull-right"
        onClick={this.handleSubmit}>Save</button>
    
    return (
      <div className="lesson-create col-xs-8 col-xs-offset-2">
        <div className="panel panel-default lesson-create-panel">
          <div className="panel-header text-center">
            <h3>CREATE A LESSON</h3>
            </div>
          <div className="panel-body">
          <form className="form-horizontal">
            
            <div className="form-group">
              <label htmlFor="lesson" className="col-sm-3 control-label"><strong>Lesson Title:</strong></label>
              <div className="col-sm-9">
              <input
                id="lesson"
                className="form-control"
                type="text" 
                placeholder="What is the name of your new Lesson?"
                ref="title" 
                value={this.state.title}
                onChange={this.onInputChange} />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="video_url" className="col-sm-3 control-label"><strong>Video URL:</strong></label>
              <div className="col-sm-9">
                <input
                id="video_url"
                  className="form-control"
                  type="url"
                  placeholder="Input your video URL here. We currently only support YouTube videos."
                  name="newVideoUrl" ref="video_url"
                  value={this.state.video_url}
                  onChange={this.onInputChange} />
              </div>
           </div>
            
            <div className="form-group">
              <label htmlFor="lesson_url" className="col-sm-3 control-label"><strong>Key words for URL</strong></label>
              <div className="col-sm-9">
                <input
                  id="lesson_url"
                  className="form-control"
                  type="text"
                  placeholder="/shakespeare-in-the-movies-lesson2"
                  name="newVideoUrl"
                  ref="lesson_url"
                  value={this.state.lesson_url}
                  onChange={this.onInputChange} />
                {youtubeErrorMessage}
                {errorMessage}
              </div>
            </div>
            <div className="col-md-offset-3 col-md-7">
            {successMessage}
            </div>
            {button}

          </form>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = AddVideoBox;




