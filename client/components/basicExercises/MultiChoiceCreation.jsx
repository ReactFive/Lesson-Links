var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var AuthStore = require('../../stores/AuthStore');
var LessonConfigStore = require('../../stores/LessonConfigStore');
var Actions = require('../../actions');
var Select = require('react-select');
var TextInput = require('./TextInput.jsx');
var Textarea = require('./Textarea.jsx');
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

  createInputs: function(){
    var self= this;

    var inputs = [];
    var i;
    for (i = 0; i < self.state.exercise.optNums; i++) {
      inputs.push(
      <span>
        <TextInput
          wrapperClass="form-group"
          htmlFor={'option' + i}
          id={'option' + i}
          ref={'option' + i}
          key={i * 10}
          name={'answers-' + i}
          label={self.state.exercise.options[0].label}
          value={self.state.exercise.answers[i] || ""}
          onChange={self.setExerciseState}
          placeholder="Add an option here" />
        <Textarea
          htmlFor={'feedback' + i}
          id={'feedback' + i}
          ref={'feedback' + i}
          key={i * 20}
          label="Feedback to these answers when entered by a learner:"
          wrapperClass="form-group"
          name={'feedback-' + i}
          value={self.state.exercise.feedback[i] || ""}
          onChange={self.setExerciseState}/>
      </span>
    )
    }
    return inputs;
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
                <h3>Create/Update a Multiple Choice Question</h3>
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

                  {this.createInputs()}

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
                      <button type="submit" className="signup-cancel-btn btn btn-primary margin-right">Save / Update</button>
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

