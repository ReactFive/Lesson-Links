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
    var loadedState = this.props.exerciseState || {};
    var ex = loadedState.exercise || {};
    var updating = Object.keys(ex).length;
    return {
      exercise: {
        question: ex.question || "",
        numbs: ex.numbs || 6,
        optNumbs: ex.optNumbs || 3,
        correctOption: ex.correctOption || null,
        answers: ex.answers ||["","","","",""],
        feedback: ex.feedback || ["","","","",""],
        options: [
          {value: '1', label: 'Option 1'},
          {value: '2', label: 'Option 2'},
          {value: '3', label: 'Option 3'},
          {value: '4', label: 'Option 4'},
          {value: '5', label: 'Option 5'}
        ]
      },
      _id: loadedState._id || undefined,
      updating: !!updating
    }
  },

  componentWillReceiveProps: function(nextProps) {
    var loadedState = nextProps.exerciseState;
    var ex = loadedState.exercise || {};
    var updating = Object.keys(ex).length;
    this.setState({
      exercise: {
        question: ex.question || "",
        numbs: ex.numbs || 6,
        optNumbs: ex.optNumbs || 3,
        correctOption: ex.correctOption || null,
        answers: ex.answers ||["","","","",""],
        feedback: ex.feedback || ["","","","",""],
        options: [
          {value: '1', label: 'Option 1'},
          {value: '2', label: 'Option 2'},
          {value: '3', label: 'Option 3'},
          {value: '4', label: 'Option 4'},
          {value: '5', label: 'Option 5'}
        ]
      },
      _id: loadedState._id || undefined,
      updating: !!updating
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
    let i;
    for (i = 0; i < this.state.exercise.optNumbs; i++) {
      inputs.push(
        <div className="answer-choice">
          <div className="col-sm-1 answer-choice-number">
            {i+1}
          </div>
          <div className="col-sm-11 answer-choice-content">
            <Textarea
                wrapperClass="form-group"
                className="form-control exercise-text-form"
                htmlFor={'optiona' + i}
                id={'optionb' + i}
                ref={'optionc' + i}
                rows={1}
                name={'answers-' + i}
                value={self.state.exercise.answers[i]}
                onChange={self.setExerciseState}
                placeholder="answer choice" />
            <Textarea
                className="form-control exercise-text-form"
                placeholder="feedback shown if selected by student"
                htmlFor={'feedback' + i}
                id={'feedback' + i}
                ref={'feedback' + i}
                rows={1}
                wrapperClass="form-group"
                name={'feedback-' + i}
                value={self.state.exercise.feedback[i]}
                onChange={self.setExerciseState}/>
          </div>
        </div>
      )
    }
    return inputs;
  },

  createRadioOptions: function(){
    var self = this;

    var radioOptions = [];
    let i;
    for (i = 0; i < this.state.exercise.optNumbs; i++) {
      radioOptions.push(
          <label htmlFor={'correct'+i+1} className="radio-inline">
            <input ref={'correct'+i+1} type="radio" name="correct" value={i}
                   defaultChecked={self.state.exercise.correctOption === i.toString()} />
            {i+1}
          </label>
      )
    }
    return radioOptions;

  },

  render: function(){

    return (
        <div className="exercise-form animated fadeInUp">
              <div className="">
                <h4><strong>Multiple Choice</strong></h4>
              </div>
              <hr/>
              <form className="multichoiceForm" name="multichoiceForm" onSubmit={this.handleSubmit}>
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
                <div>
                  <span className="correct-answer-label">
                     <strong>How many answer choices? </strong>
                   </span>
                   <Select
                       name="Number of items"
                       className="answer-choices-select"
                       value=""
                       options={this.state.exercise.options}
                       onChange={this.formSetup} />
                </div>

                <div onChange={this.checkHandle} className="correct-answer-label">
                   <span className="correct-answer-label">
                     <strong>Correct answer choice: </strong>
                   </span>
                  {this.createRadioOptions()}
                </div>

                {this.createInputs()}
                
                <div className="col-md-offset-8">
                  <button type="submit" className="signup-cancel-btn btn btn-primary margin-right">Save</button>
                  <button onClick={this.handleCancel} className=" btn btn-default">Cancel</button>
                </div>
              </form>
        
        </div>
    )
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var exerciseObj = {};
    var time = videojs("#attachmentVideo").currentTime();
    exerciseObj.exercise = _.cloneDeep(this.state.exercise);
    exerciseObj.time = time;
    exerciseObj.type = "multiplechoice";
    exerciseObj._id = this.state._id;
    exerciseObj.exercise.answers = removeBlanks(exerciseObj.exercise.answers);
    exerciseObj.exercise.feedback = removeBlanks(exerciseObj.exercise.feedback);

    if (exerciseObj.exercise.question.length && exerciseObj.exercise.options.length) {
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
    this.props.onComplete();
  },

  onChange: function(event, user){
    this.setState({user: user})
  }
});

module.exports = MultiChoiceCreation;

