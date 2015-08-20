var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var AuthStore = require('../../stores/AuthStore');
var LessonConfigStore = require('../../stores/LessonConfigStore');
var Actions = require('../../actions');
var TextInput = require('./TextInput.jsx');
var Textarea = require('./Textarea.jsx');

var _ = require('lodash');

var ShortAnswerCreation = React.createClass({

  mixins: [Reflux.connect(AuthStore, "auth"),
    Reflux.connect(LessonConfigStore, "lesson"),
    Navigation],

  getInitialState: function() {
    console.log(this.props.exerciseState);
    var loadedState = this.props.exerciseState || {};
    console.log("here is the loaded state:", !!loadedState);
    return {
      exercise: {
        question: loadedState.question || "",
        bestAnswers: loadedState.bestAnswers || "",
        bestFeedback: loadedState.bestFeedback || "",
        altAnswers: loadedState.altAnswers || "",
        altFeedback: loadedState.altFeedback || ""
      },
      updating: !!loadedState
    };
  },

  setExerciseState: function(event){
    var field = event.target.name;
    this.state.exercise[field] = event.target.value;
    return this.setState({exercise: this.state.exercise});
  },

  componentWillReceiveProps: function(nextProps) {
    var loadedState = nextProps.exerciseState;
    console.log("here is the loaded state:", !!loadedState);
    this.setState({
      exercise: {
        question: loadedState.question || "",
        bestAnswers: loadedState.bestAnswers || "",
        bestFeedback: loadedState.bestFeedback || "",
        altAnswers: loadedState.altAnswers || "",
        altFeedback: loadedState.altFeedback || ""
      },
      updating: !!loadedState
    });
  },

  render: function(){

    return (
    <div className="container">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Create a Short Answer Question</h3>
          </div>
            <div className="modal-body">
              <form name="shortAnswerForm">
                <h5>Write a prompt requiring a short answer</h5>
                <div className="form-group">
                  <input
                    ref="question"
                    className="form-control"
                    name="question"
                    type='text'
                    value={this.state.exercise.question}
                    onChange={this.setExerciseState}
                    placeholder="Question"/>
                </div>

                 <TextInput
                   wrapperClass="form-group"
                   name="bestAnswers"
                   label="Best answer(s)"
                   value={this.state.exercise.bestAnswers}
                   onChange={this.setExerciseState}
                   placeholder="Separate answers with a pipe: red | white | blue" />

                <Textarea
                  label="Feedback to these answers when entered by a learner:"
                  wrapperClass="form-group"
                  name="bestFeedback"
                  value={this.state.exercise.bestFeedback}
                  onChange={this.setExerciseState}/>

                <TextInput
                  wrapperClass="form-group"
                  name="altAnswers"
                  label="Alternative answer(s)"
                  value={this.state.exercise.altAnswers}
                  onChange={this.setExerciseState}
                  placeholder="Separate answers with a pipe: red | white | blue" />

                <Textarea
                  label="Feedback to these answers when entered by a learner:"
                  wrapperClass="form-group"
                  name="altFeedback"
                  value={this.state.exercise.altFeedback}
                  onChange={this.setExerciseState}/>
                <div className="row">
                  <div className="col-md-offset-6">
                    <button
                      type="submit"
                      onClick={this.handleSubmit}
                      className="signup-cancel-btn btn btn-primary margin-right">Add to your lesson</button>
                    <button
                      onClick={this.handleCancel}
                      className="btn btn-default">Cancel</button>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  },

  handleSubmit: function(event){

    event.preventDefault();

    var exercise = {};
    exercise.type = "shortanswer";
    exercise.time = videojs("#attachmentVideo").currentTime();
    exercise.question = this.state.exercise.question;
    exercise.bestAnswers = createRegex(this.state.exercise.bestAnswers);
    exercise.bestFeedback = this.state.exercise.bestFeedback;

    if (this.state.exercise.altAnswers.length) {
      exercise.altAnswers = createRegex(this.state.exercise.altAnswers);
      exercise.altFeedback = this.state.exercise.altFeedback;
    }

    if (this.state.exercise.question.length && this.state.exercise.bestAnswers.length) {
      console.log(exercise);
      Actions.createExercise(exercise);
      this.props.onComplete();
    } else {
      toastr['warning']('Make sure you have a question and answer(s)');
    }

    function createRegex(value){
      var strippedOfSpacesAndPunc = value.replace(/ |\,|\.|\;/g, '').toLowerCase();
      return "(" + strippedOfSpacesAndPunc + ")";
    }

  },

  handleCancel: function(event) {
    event.preventDefault();
    console.log("cancel clicked");
    this.props.onComplete();
  },

});

module.exports = ShortAnswerCreation;