var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var AuthStore = require('../../stores/AuthStore');
var LessonConfigStore = require('../../stores/LessonConfigStore');
var Actions = require('../../actions');
var _ = require('lodash');

var ShortAnswerCreation = React.createClass({

  mixins: [Reflux.connect(AuthStore, "auth"),
    Reflux.connect(LessonConfigStore, "lesson"),
    Navigation],

  getInitialState: function() {
    return {
    }
  },

  render: function(){

    return (
    <div className="container multichoice-container">
      <div className="col-md-8 col-md-offset-2">

        <h3>Create a Short Answer Question</h3>
        <form name="shortAnswerForm" onSubmit={this.handleSubmit}>
          <h5>Write a prompt requiring a short answer</h5>
          <div className="form-group">
            <input ref="prompt" className="form-control" name="name" type='text' placeholder="Question"/>
          </div>

          <div className="form-group">
            <label htmlFor="bestAnswers"><strong>Best answer(s)</strong></label>
            <input id="bestAnswers"
                   className="form-control"
                   name="bestAnswers"
                   type='text'
                   ref="bestAnswers"
                   placeholder="Separate answers with a pipe: red | white | blue"/>
          </div>

          <div className="form-group">
            <label htmlFor="bestFeedback">Feedback to these answers when entered by a learner:</label>
                  <textarea id="bestFeedback"
                            className="form-control"
                            rows="2"
                            ref="bestFeedback"/>
          </div>

          <div className="form-group">
            <label htmlFor="altAnswers"><strong>Alternative answer(s)</strong></label>
            <input id="altAnswers"
                   className="form-control"
                   name="altAnswers"
                   type='text'
                   ref="altAnswers"
                   placeholder="Separate answers with a pipe: red | white | blue"/>
          </div>

          <div className="form-group">
            <label htmlFor="altFeedback">Feedback to these answers when selected by a learner:</label>
                  <textarea id="altFeedback"
                            className="form-control"
                            rows="2"
                            ref="altFeedback"/>
          </div>

          <button type="submit" className="signup-cancel-btn btn btn-primary pull-right">Add to your lesson</button>
          <button onClick={this.handleCancel} className=" btn btn-default pull-right">Cancel</button>

      </form>
    </div>
  </div>
    )
  },

  handleSubmit: function(event){

    event.preventDefault();

    var exercise = {};
    exercise.type = "ShortAnswer";
    //exercise.time = videojs("#attachmentVideo").currentTime();
    exercise.question = this.refs.prompt.getDOMNode().value.trim();
    exercise.bestAnswers = createRegex(this.refs.bestAnswers.getDOMNode().value.trim());
    exercise.bestFeedback = this.refs.bestFeedback.getDOMNode().value.trim();

    if (altAnswers.length) {
      exercise.altAnswers = createRegex(this.refs.altAnswers.getDOMNode().value.trim());
      exercise.altFeedback = this.refs.altFeedback.getDOMNode().value.trim();
    }

    if (exercise.question.length && exercise.bestAnswers) {
      if (exercise.bestAnswers.length) {
          console.log(exercise);
          Actions.createExercise(exercise);
          this.props.onComplete(null);
        }
      } else {
        toastr['warning']('Make sure you have a question and answer(s)');
      }

    function createRegex(value){
      var strippedOfSpacesAndPunc = value.replace(/ |\,|\.|\;/g, '').toLowerCase();
      return "/(" + strippedOfSpacesAndPunc+ ")/";
    }

  },

  handleCancel: function(event) {
    event.preventDefault();
    console.log("cancel clicked");
    this.props.onComplete(null);
  },

});

module.exports = ShortAnswerCreation;