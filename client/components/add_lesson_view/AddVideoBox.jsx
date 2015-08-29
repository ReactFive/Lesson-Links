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
    },

    /*Callback to CreateLessonStore: invalidYouTube*/
    /*This function runs if the User inputs an Invalid YouTube Link*/
    function(){
      swal("Invalid YouTube Link!", "That lesson is not a valid YouTube URL. Try Another.", "error")},

    /*Callback to CreateLessonStore: lessonCreated*/
    /*This function runs if the creation is successful -- clicking the button will redirect*/
    function(){
      swal({
        title: "Success!", 
        text: "Your lesson has been created! \n Title: '" + self.state.title + "' \n Lesson Link: www.lesson-links.com/" + self.state.lesson_url + "'", 
        type: "success",
        showCancelButton: false,
        confirmButtonText: "Edit My Lesson!"
      },
      function(isConfirm){
        if(isConfirm){
          self.transitionTo('/configure')
        }
      })
    },

    /*Callback to CreateLessonStore: urlAlreadyExists*/
    /*This function runs if the Lesson Link already exists in the database*/
    function(){
      swal("Invalid URL!", "That Lesson Link already exists! Try a new combination of words!", "error")}
    );
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

    var apo = "'";

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
      <div className="lesson-create col-xs-8 col-xs-offset-2 animated fadeIn">
        <div className="panel panel-default lesson-create-panel">
          <div className="panel-header text-center">
            <h3>CREATE A LESSON</h3>
            </div>
          <div className="panel-body">
          <form className="form-horizontal">
            
            <div className="form-group">
              <label htmlFor="lesson" className="col-sm-4 control-label"><strong>Lesson Title:</strong></label>
              <div className="col-sm-8">
              <input
                id="lesson"
                className="form-control"
                type="text" 
                placeholder=""
                ref="title" 
                value={this.state.title}
                onChange={this.onInputChange} />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="video_url" className="col-sm-4 control-label"><strong>YouTube URL:</strong></label>
              <div className="col-sm-8">
                <input
                id="video_url"
                  className="form-control"
                  type="url"
                  placeholder=""
                  name="newVideoUrl" ref="video_url"
                  value={this.state.video_url}
                  onChange={this.onInputChange} />
              </div>
           </div>
            
            <div className="form-group">
              <label htmlFor="lesson_url" className="col-sm-4 control-label"><strong>Customize your lesson link:</strong></label>
              <div className="col-sm-8">
                <p className="custom-link">www.lesson-links.com/</p>
                <input
                  id="lesson_url"
                  className="custom-link-form form-control"
                  type="text"
                  placeholder="your-lesson-title"
                  name="newVideoUrl"
                  ref="lesson_url"
                  value={this.state.lesson_url}
                  onChange={this.onInputChange} />
              </div>
            </div>
            <div className="col-md-offset-3 col-md-7">
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




