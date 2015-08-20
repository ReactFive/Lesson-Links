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

var MultiChoiceCreation = React.createClass({
  mixins: [Reflux.connect(AuthStore, "auth"),
  Reflux.connect(LessonConfigStore, "lesson"),
  Navigation],

  getInitialState: function(){
    var loadedState = this.props.exerciseState;
    return {
      exercise: {
        question: loadedState.question || "",
        numbs: loadedState.numbs || 6,
        optNumbs: loadedState.optNumbs || 3,
        correctOption: loadedState.correctOption || null,
        answers: loadedState.answers ||["","","","",""],
        feedback: loadedState.feedback || ["","","","",""],
        options: [
          {value: '1', label: 'Option 1'},
          {value: '2', label: 'Option 2'},
          {value: '3', label: 'Option 3'},
          {value: '4', label: 'Option 4'},
          {value: '5', label: 'Option 5'}
        ]
      }
    }
  },

  componentWillReceiveProps: function(nextProps) {
    var loadedState = nextProps.exerciseState;
    this.setState({
      exercise: {
        question: loadedState.question || "",
        numbs: loadedState.numbs || 6,
        optNumbs: loadedState.optNumbs || 3,
        correctOption: loadedState.correctOption || null,
        answers: loadedState.answers ||["","","","",""],
        feedback: loadedState.feedback || ["","","","",""],
        options: [
          {value: '1', label: 'Option 1'},
          {value: '2', label: 'Option 2'},
          {value: '3', label: 'Option 3'},
          {value: '4', label: 'Option 4'},
          {value: '5', label: 'Option 5'}
        ]
      }
    });
  },

  formSetup: function(event){
    this.state.exercise['optNumbs'] = event;
    this.state.exercise['numbs'] = event * 2;
    this.setState({exercise: this.state.exercise});
  },

  checkHandle: function(event){
    this.state.exercise.correctOption = event.target.value;
    this.setState({exercise: this.state.exercise});
  },

  setExerciseState : function(event){
    if(event.target.name.indexOf('answers')>=0 || event.target.name.indexOf('feedback')>=0) {
      var fieldInfo = event.target.name.split('-');
      var optionInfoType = fieldInfo[0],
          optionInfoIndex = fieldInfo[1];

      this.state.exercise[optionInfoType][optionInfoIndex] = event.target.value;
      this.setState({exercise: this.state.exercise});
    } else {
      this.state.exercise[event.target.name] = event.target.value;
      this.setState({exercise: this.state.exercise});
    }
  },

  render: function(){
    var classString = {};
    var radioClassString = {};
    for (var i = 0; i < 10; i++){
      if(i < this.state.exercise.numbs) {
        classString[i] = "form-group";
      } else {
        classString[i] = "hidden";
      }
    }
    for (var i = 0; i < 5; i++){
      if(i < this.state.exercise.optNumbs) {
        radioClassString[i] = "radio-inline";
      } else {
        radioClassString[i] = "hidden";
      }
    }
    return (
        <div className="container">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Create a Multiple Choice Question</h3>
              </div>
              <div className="modal-body">
                <Select
                  name="Number of items"
                  value="Select the number of alternative answers"
                  options={this.state.exercise.options}
                  onChange={this.formSetup} />

                <form name="multichoiceForm" onSubmit={this.handleSubmit}>
                <h5>Write your question/prompt/problem</h5>
                  <div className="form-group">
                    <input ref="question"
                       className="form-control"
                       name="question"
                       type='text'
                       value={this.state.exercise.question}
                       onChange={this.setExerciseState}
                       placeholder="Question"/>
                  </div>

                  <div className={classString[0]}>
                    <label htmlFor="option1"><strong>{this.state.exercise.options[0].label}</strong></label>
                      <input id="option1"
                         className="form-control"
                         name="answers-0"
                         type='text'
                         ref="option1"
                         value={this.state.exercise.answers[0] || ""}
                         onChange={this.setExerciseState}
                         placeholder="Add an option here"/>
                  </div>
                  <div className={classString[1]}>
                      <label htmlFor="feedback1">Feedback to this option when selected by learner:</label>
                      <textarea id="feedback1"
                        className="form-control"
                        name="feedback-0"
                        rows="2"
                        ref="feedback1"
                        value={this.state.exercise.feedback[0] || ""}
                        onChange={this.setExerciseState}/>
                  </div>
                  <div className={classString[2]}>
                    <label htmlFor="option2"><strong>{this.state.exercise.options[1].label}</strong></label>
                    <input id="option2"
                       className="form-control"
                       name="answers-1"
                       type='text'
                       ref="option2"
                       value={this.state.exercise.answers[1] || ""}
                       onChange={this.setExerciseState}
                       placeholder="Add an option here"/>
                  </div>
                  <div className={classString[3]}>
                    <label htmlFor="feedback2">Feedback to this option when selected by learner:</label>
                      <textarea id="feedback2"
                        name="feedback-1"
                        className="form-control"
                        rows="2"
                        value={this.state.exercise.feedback[1] || ""}
                        onChange={this.setExerciseState}
                        ref="feedback2"/>
                  </div>
                  <div className={classString[4]}>
                    <label htmlFor="option3"><strong>{this.state.exercise.options[2].label}</strong></label>
                    <input id="option3"
                       className="form-control"
                       name="answers-2"
                       type='text'
                       ref="option3"
                       value={this.state.exercise.answers[2] || ""}
                       onChange={this.setExerciseState}
                       placeholder="Add an option here"/>
                  </div>
                  <div className={classString[5]}>
                    <label htmlFor="feedback3">Feedback to this option when selected by learner:</label>
                      <textarea id="feedback3"
                        ref="feedback3"
                        name="feedback-2"
                        className="form-control"
                        rows="2"
                        onChange={this.setExerciseState}
                        value={this.state.exercise.feedback[2] || ""}/>
                  </div>
                  <div className={classString[6]}>
                    <label htmlFor="option4"><strong>{this.state.exercise.options[3].label}</strong></label>
                    <input id="option4"
                       className="form-control"
                       name="answers-3"
                       ref="option4"
                       type='text'
                       onChange={this.setExerciseState}
                       value={this.state.exercise.answers[3] || ""}
                       placeholder="Add an option here"/>
                  </div>
                  <div className={classString[7]}>
                    <label htmlFor="feedback4">Feedback to this option when selected by learner:</label>
                      <textarea id="feedback4"
                        ref="feedback4"
                        name="feedback-3"
                        className="form-control"
                        rows="2"
                        onChange={this.setExerciseState}
                        value={this.state.exercise.feedback[3] || ""}/>
                  </div>
                  <div className={classString[8]}>
                    <label htmlFor="option5"><strong>value={this.state.exercise.options[4].value}</strong></label>
                    <input id="option5"
                       className="form-control"
                       name="answers-4"
                       ref="option5"
                       type='text'
                       value={this.state.exercise.answers[4] || ""}/>
                       placeholder="Add an option here"/>
                  </div>
                  <div className={classString[9]}>
                    <label htmlFor="feedback5">Feedback to this option when selected by learner:</label>
                      <textarea id="feedback5"
                        ref="feedback5"
                        name="feedback-4"
                        className="form-control"
                        rows="2"
                        onChange={this.setExerciseState}
                        value={this.state.exercise.feedback[4] || ""}/>
                  </div>

                   <div onChange={this.checkHandle} className="correct-answer-label">
                     <span className="correct-answer-label">
                       <strong>Indicate the best option: </strong>
                     </span>
                     <label htmlFor="correct1" className={radioClassString[0]}>
                       <input ref="correct1" type="radio" name="correct" value="0"
                        defaultChecked={this.state.exercise.correctOption === "0"} />
                       1
                     </label>
                     <label htmlFor="correct2" className={radioClassString[1]}>
                       <input ref="correct2" type="radio" name="correct" value="1"
                        defaultChecked={this.state.exercise.correctOption === "1"}/>
                       2
                     </label>
                     <label htmlFor="correct3" className={radioClassString[2]}>
                       <input ref="correct3" type="radio" name="correct" value="2"
                        defaultChecked={this.state.exercise.correctOption === "2"}/>
                       3
                     </label>
                     <label htmlFor="correct4" className={radioClassString[3]}>
                       <input ref="correct4" type="radio" name="correct" value="3"
                        defaultChecked={this.state.exercise.correctOption === "3"}/>
                       4
                     </label>
                     <label htmlFor="correct5" className={radioClassString[4]}>
                       <input ref="correct5" type="radio" name="correct" value="4"
                        defaultChecked={this.state.exercise.correctOption === "4"}/>
                       5
                     </label>
                    </div>
                  <div className="row">
                    <div className="col-md-offset-6">
                      <button type="submit" className="signup-cancel-btn btn btn-primary margin-right">Add to your lesson</button>
                      <button onClick={this.handleCancel} className=" btn btn-default">Cancel</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    )
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var time = videojs("#attachmentVideo").currentTime();

    var exercise = _.cloneDeep(this.state.exercise);
    exercise.time = time;
    exercise.type = "multiplechoice";
    exercise.answers = removeBlanks(exercise.answers);
    exercise.feedback = removeBlanks(exercise.feedback);

    console.log(exercise);
    if (exercise.question.length && exercise.options.length) {
      Actions.createExercise(exercise);
      this.props.onComplete();
    } else {
      toastr['warning']('Make sure you have a question and options');
    }

    function removeBlanks(array) {
      var arr = [];
      arr = _.remove(array, function (o) {
        return o !== "";
      });
      return arr;
    }
  },

  handleCancel: function(event) {
    event.preventDefault();
    console.log("cancel clicked");
    this.props.onComplete();
  },

  onChange: function(event, user){
    this.setState({user: user})
  }
});

module.exports = MultiChoiceCreation;

