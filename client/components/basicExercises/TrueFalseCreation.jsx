var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var AuthStore = require('../../stores/AuthStore');
var LessonConfigStore = require('../../stores/LessonConfigStore');
var Actions = require('../../actions');
var Select = require('react-select');
var _ = require('lodash');

var TrueFalseCreation = React.createClass({
  mixins: [Reflux.connect(AuthStore, "auth"),
    Reflux.connect(LessonConfigStore, "lesson"),
    Navigation],

  getInitialState: function() {
    var loadedState = this.props.exerciseState || {};
    var updating = Object.keys(loadedState).length;
    return {
      exercise: {
        question: loadedState.question || "",
        correctOption: loadedState.correctOption || undefined,
        feedbackTrue: loadedState.feedbackTrue || "",
        feedbackFalse: loadedState.feedbackFalse || ""
      },
      id: loadedState.id || undefined,
      updating: !!updating
    };
  },

  componentWillReceiveProps: function(nextProps) {
    var loadedState = nextProps.exerciseState || {};
    var updating = Object.keys(loadedState).length;
    console.log(loadedState);
    this.setState({
      exercise: {
        question: loadedState.question || "",
        correctOption: loadedState.correctOption || undefined,
        feedbackTrue: loadedState.feedbackTrue || "",
        feedbackFalse: loadedState.feedbackFalse || ""
      },
      id: loadedState.id || undefined,
      updating: !!updating
    });
  },

  setExerciseState: function(event){
    var field = event.target.name;
    console.log(field, event.target.value)
    this.state.exercise[field] = event.target.value;
    return this.setState({exercise: this.state.exercise});
  },

  render: function(){
    console.log(this.state.exercise);
    return (
        <div className="container">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Create/Update a True-False Question</h3>
              </div>
               <div className="modal-body">
            <form name="trueFalseForm" onSubmit={this.handleSubmit}>
              <h5>Write a statement which is true or false</h5>
              <div className="form-group">
                <input 
                  ref="question" 
                  className="form-control" 
                  name="question" 
                  type='text' 
                  value={this.state.exercise.question}
                  onChange={this.setExerciseState}
                  placeholder="Question" />
              </div>


              <div className="form-group">
                <label htmlFor="feedbackTrue">Feedback if the user selects "true":</label>
                  <textarea 
                    id="feedbackTrue"
                    className="form-control"
                    rows="2"
                    name="feedbackTrue"
                    value={this.state.exercise.feedbackTrue}
                    onChange={this.setExerciseState}
                    ref="feedbackTrue"/>
              </div>

              <div className="form-group">
                <label htmlFor="feedbackFalse">Feedback if the user selects "false":</label>
                  <textarea 
                    id="feedbackFalse"
                    className="form-control"
                    rows="2"
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
                 <div className="row">
                   <div className="col-md-offset-6">
                      <button type="submit" onClick={ this.handleSubmit } className="signup-cancel-btn btn btn-primary margin-right">Save / Update</button>
                      <button onClick={ this.handleCancel } className=" btn btn-default">Cancel</button>
                  </div>
               </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
  },

  checkHandle: function (event){
    this.state.exercise.correctOption = event.target.value;
    this.setState({exercise: this.state.exercise});
  },

  handleCancel: function(event) {
    event.preventDefault();
    console.log("cancel clicked");
    this.props.onComplete();
  },
  
  handleSubmit: function(event) {
    event.preventDefault();

    var exerciseObj = {};
    exerciseObj.exercise = _.cloneDeep(this.state.exercise);
    exerciseObj.type = "truefalse";
    exerciseObj.time = videojs("#attachmentVideo").currentTime();
    exerciseObj.id = this.state.id;

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