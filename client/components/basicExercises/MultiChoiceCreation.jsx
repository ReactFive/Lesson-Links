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
          <span>
        <TextInput
            wrapperClass="form-group"
            htmlFor={'option' + i}
            id={'option' + i}
            ref={'option' + i}
            name={'answers-' + i}
            label={self.state.exercise.options[i].label}
            value={self.state.exercise.answers[i]}
            onChange={self.setExerciseState}
            placeholder="Add an option here" />
        <Textarea
            htmlFor={'feedback' + i}
            id={'feedback' + i}
            ref={'feedback' + i}
            label="Feedback to these answers when entered by a learner:"
            wrapperClass="form-group"
            name={'feedback-' + i}
            value={self.state.exercise.feedback[i]}
            onChange={self.setExerciseState}/>
      </span>
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
        <div className="animated fadeInUp">
          <div className="">
            <div className="">
              <div className="">
                <h3>Create/Update a Multiple Choice Question</h3>
              </div>
              <div className="">
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

                    {this.createRadioOptions()}

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
    console.log("cancel clicked");
    this.props.onComplete();
  },

  onChange: function(event, user){
    this.setState({user: user})
  }
});

module.exports = MultiChoiceCreation;

