var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var AuthStore = require('../../stores/AuthStore');
var AddLessonStore = require('../../stores/AddLessonStore');
var Actions = require('../../actions');
var Select = require('react-select');
var _ = require('lodash');

var TrueFalseCreation = React.createClass({
  mixins: [Reflux.connect(AuthStore, "auth"),
    Reflux.connect(AddLessonStore, "lesson"),
    Navigation],

  getInitialState: function() {
    return {
      correctOption: undefined
    };
  },

  render: function(){
    return (
        <div className="container multichoice-container">
          <div className="col-md-8 col-md-offset-2">

            <h3>Create a True-False Question</h3>

            <form name="trueFalseForm" onSubmit={this.handleSubmit}>
              <h5>Write a statement which is true or false</h5>
              <div className="form-group">
                <input ref="question" className="form-control" name="name" type='text' placeholder="Question"/>
              </div>

              <div onChange={this.checkHandle} className="correct-answer-label">
                 <span className="correct-answer-label">
                   <strong>Indicate the correct answer: </strong>
                 </span>
                <label htmlFor="correct1" className={radioClassString[0]}>
                  <input ref="correct1" type="radio" name="correct" value="True"/>
                  True
                </label>
                <label htmlFor="correct2" className={radioClassString[1]}>
                  <input ref="correct2" type="radio" name="correct" value="False"/>
                  Fale
                </label>
              </div>

              <div className={classString[1]}>
                <label htmlFor="feedbackTrue">Feedback if the user selects "true":</label>
                  <textarea id="feedbackTrue"
                            className="form-control"
                            rows="2"
                            ref="feedbackTrue"/>
              </div>

              <div className={classString[1]}>
                <label htmlFor="feedbackFalse">Feedback if the user selects "false":</label>
                  <textarea id="feedbackFalse"
                            className="form-control"
                            rows="2"
                            ref="feedbackFalse"/>
              </div>

              <button type="submit" className="signup-cancel-btn btn btn-primary pull-right">Add to your lesson</button>
              <Link activeClassName="active" to="/edit"><button className=" btn btn-default pull-right">Cancel</button></Link>
            </form>
          </div>
        </div>
    )
  },

  checkHandle: function (event){
    this.state.correctOption = event.target.value;
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var question = this.refs.question.getDOMNode().value.trim();

    var feedbackTrue = this.refs.feedbackTrue.getDOMNode().value.trim();
    var feedbackFalse = this.refs.feedbackFalse.getDOMNode().value.trim();

    //var time = videojs("#attachmentVideo").currentTime;

    var exercise = {};
    //exercise.time = time;
    exercise.type = "TrueFalse";
    exercise.question = question;
    exercise.feedbackTrue = feedbackTrue;
    exercise.feedbackFalse = feedbackFalse;
    exercise.correct = this.state.correctOption;

    if (exercise.question.length) {
      Actions.createExercise(exercise);
      this.transitionTo('/edit');
    } else {
      toastr['warning']('Make sure you have a question and options');
    }

  },

  onChange: function(event, user){
    this.setState({user: user})
  }
});

module.exports = TrueFalseCreation;