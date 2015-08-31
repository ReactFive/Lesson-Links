var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var AuthStore = require('../../stores/AuthStore');
var LessonConfigStore = require('../../stores/LessonConfigStore');
var Actions = require('../../actions');
var Select = require('react-select');
var Textarea = require('./Textarea.jsx');
var _ = require('lodash');

var TrueFalseCreation = React.createClass({
  mixins: [Reflux.connect(AuthStore, "auth"),
    Reflux.connect(LessonConfigStore, "lesson"),
    Navigation],

  getInitialState: function() {
    var loadedState = this.props.exerciseState || {};
    var ex = loadedState.exercise || {};
    var updating = Object.keys(ex).length;
    return {
      exercise: {
        question: ex.question || "",
        correctOption: ex.correctOption || undefined,
        feedbackTrue: ex.feedbackTrue || "",
        feedbackFalse: ex.feedbackFalse || ""
      },
      _id: loadedState._id || undefined,
      updating: !!updating
    };
  },

  componentWillReceiveProps: function(nextProps) {
    var loadedState = nextProps.exerciseState || {};
    var ex = loadedState.exercise || {};
    var updating = Object.keys(ex).length;
    this.setState({
      exercise: {
        question: ex.question || "",
        correctOption: ex.correctOption || undefined,
        feedbackTrue: ex.feedbackTrue || "",
        feedbackFalse: ex.feedbackFalse || ""
      },
      _id: loadedState._id || undefined,
      updating: !!updating
    });
  },

  setExerciseState: function(event){
    var field = event.target.name;
    this.state.exercise[field] = event.target.value;
    return this.setState({exercise: this.state.exercise});
  },

  render: function(){
    return (
        <div className="exercise-form animated fadeInUp">
          <div className="">
            <h3>True or False</h3>
          </div>

          <hr/>

          <form className="trueFalseForm" name="trueFalseFrom" onSubmit={this.handleSubmit}>
            <div>
              <h5>Question</h5>
              <div className="form-group">
                <input ref="question"
                  className="form-control"
                  name="question"
                  type='text'
                  value={this.state.exercise.question}
                  onChange={this.setExerciseState}/>
              </div>
            </div>

            <h5>Answer Choices</h5>

            <div className="form-group">
              <label htmlFor="feedbackTrue">Feedback if the user selects "true":</label>
              <Textarea
                  id="feedbackTrue"
                  className="form-control exercise-text-form"
                  rows={1}
                  name="feedbackTrue"
                  value={this.state.exercise.feedbackTrue}
                  onChange={this.setExerciseState}
                  ref="feedbackTrue"/>
            </div>

            <div className="form-group">
              <label htmlFor="feedbackFalse">Feedback if the user selects "false":</label>
              <Textarea
                  id="feedbackFalse"
                  className="form-control exercise-text-form"
                  rows={1}
                  name="feedbackFalse"
                  value={this.state.exercise.feedbackFalse}
                  onChange={this.setExerciseState}
                  ref="feedbackFalse"/>
            </div>

            <div onChange={this.checkHandle} className="correct-answer-label">
              <span className="correct-answer-label">
                <strong>Indicate the correct answer: </strong>
              </span>
              <label htmlFor="correct1" className="radio-inline">
                <input ref="correct1" type="radio" name="correct" value={"true"}
                  defaultChecked={this.state.exercise.correctOption === "true"}/>
                True
              </label>
              <label htmlFor="correct2" className="radio-inline">
                <input ref="correct2" type="radio" name="correct" value={"false"}
                  defaultChecked={this.state.exercise.correctOption === "false"}/>
                False
              </label>
            </div>


            <div className="col-md-offset-8">
              <button type="submit" onClick={ this.handleSubmit } className="signup-cancel-btn btn btn-primary margin-right">Save</button>
              <button onClick={ this.handleCancel } className=" btn btn-default">Cancel</button>
            </div>


          </form>
        </div>
    )
  },

  checkHandle: function (event){
    this.state.exercise.correctOption = event.target.value;
    this.setState({exercise: this.state.exercise});
  },

  handleCancel: function(event) {
    event.preventDefault();
    this.props.onComplete();
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var exerciseObj = {};
    exerciseObj.exercise = _.cloneDeep(this.state.exercise);
    exerciseObj.type = "truefalse";
    exerciseObj.time = videojs("#attachmentVideo").currentTime();
    exerciseObj._id = this.state._id;

    if (exerciseObj.exercise.question.length && exerciseObj.exercise.correctOption !== undefined) {
      if (!this.state.updating) {
        Actions.createExercise(exerciseObj);
        this.props.onComplete();
        toastr['success']('Your new exercise has been created');
      } else {
        Actions.updateExercise(exerciseObj);
        this.props.onComplete();
        toastr['success']('Your exercise has been updated');
      }
    } else {
      toastr['warning']('Make sure you have a question');
    }

  },

  onChange: function(event, user){
    this.setState({user: user})
  }
});

module.exports = TrueFalseCreation;