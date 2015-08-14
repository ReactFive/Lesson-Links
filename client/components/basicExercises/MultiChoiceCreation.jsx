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
    return {
      numbs: 6,
      optNumbs: 3,
      correctOption: null,
      options: [
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' },
        { value: '4', label: 'Four' },
        { value: '5', label: 'Five' }
      ]
    }
  },

  formSetup: function(event){
    var e = event * 2;
    this.setState({optNumbs: event, numbs: e});
  },

  render: function(){
    var classString = {};
    var radioClassString = {};
   for (var i = 0; i < 10; i++){
     if(i < this.state.numbs) {
       classString[i] = "form-group";
     } else {
       classString[i] = "hidden";
     }
   }
    for (var i = 0; i < 5; i++){
      if(i < this.state.optNumbs) {
        radioClassString[i] = "radio-inline";
      } else {
        radioClassString[i] = "hidden";
      }
    }
    return (
        <div className="container multichoice-container">
          <div className="col-md-8 col-md-offset-2">

            <h3>Create a multiple choice question</h3>

            <Select
              name="Number of items"
              value="Select the number of alternative answers"
              options={this.state.options}
              onChange={this.formSetup}
              />

            <form name="multichoiceForm" onSubmit={this.handleSubmit}>
            <h5>Write your question/prompt/problem</h5>
              <div className="form-group">
                <input ref="question" className="form-control" name="name" type='text' placeholder="Question"/>
              </div>

              <div className={classString[0]}>
                <label htmlFor="option1"><strong>Option 1</strong></label>
                  <input id="option1"
                         className="form-control"
                         name="option1"
                         type='text'
                         ref="option1"
                         placeholder="Add an option here"/>
              </div>
              <div className={classString[1]}>
                  <label htmlFor="feedback1">Feedback to this option when selected by learner:</label>
                  <textarea id="feedback1"
                            className="form-control"
                            rows="2"
                            ref="feedback1"/>
              </div>
              <div className={classString[2]}>
                <label htmlFor="option2"><strong>Option 2</strong></label>
                <input id="option2"
                       className="form-control"
                       name="option2"
                       type='text'
                       ref="option2"
                       placeholder="Add an option here"/>
              </div>
              <div className={classString[3]}>
                <label htmlFor="feedback2">Feedback to this option when selected by learner:</label>
                  <textarea id="feedback2"
                            className="form-control"
                            rows="2"
                            ref="feedback2"/>
              </div>
              <div className={classString[4]}>
                <label htmlFor="option3"><strong>Option 3</strong></label>
                <input id="option3"
                       className="form-control"
                       name="option3"
                       type='text'
                       ref="option3"
                       placeholder="Add an option here"/>
              </div>
              <div className={classString[5]}>
                <label htmlFor="feedback3">Feedback to this option when selected by learner:</label>
                  <textarea id="feedback3"
                            ref="feedback3"
                            className="form-control"
                            rows="2"/>
              </div>
              <div className={classString[6]}>
                <label htmlFor="option4"><strong>Option 4</strong></label>
                <input id="option4"
                       className="form-control"
                       name="option4"
                       ref="option4"
                       type='text'
                       placeholder="Add an option here"/>
              </div>
              <div className={classString[7]}>
                <label htmlFor="feedback4">Feedback to this option when selected by learner:</label>
                  <textarea id="feedback4"
                            ref="feedback4"
                            className="form-control"
                            rows="2"/>
              </div>
              <div className={classString[8]}>
                <label htmlFor="option5"><strong>Option 5</strong></label>
                <input id="option5"
                       className="form-control"
                       name="option5"
                       ref="option5"
                       type='text'
                       placeholder="Add an option here"/>
              </div>
              <div className={classString[9]}>
                <label htmlFor="feedback5">Feedback to this option when selected by learner:</label>
                  <textarea id="feedback5"
                            ref="feedback5"
                            className="form-control"
                            rows="2"/>
              </div>
               <div onChange={this.checkHandle} className="correct-answer-label">
                 <span className="correct-answer-label">
                   <strong>Indicate the best option: </strong>
                 </span>
                 <label htmlFor="correct1" className={radioClassString[0]}>
                   <input ref="correct1" type="radio" name="correct" value="1"/>
                   1
                 </label>
                 <label htmlFor="correct2" className={radioClassString[1]}>
                   <input ref="correct2" type="radio" name="correct" value="2"/>
                   2
                 </label>
                 <label htmlFor="correct3" className={radioClassString[2]}>
                   <input ref="correct3" type="radio" name="correct" value="3"/>
                   3
                 </label>
                 <label htmlFor="correct4" className={radioClassString[3]}>
                   <input ref="correct4" type="radio" name="correct" value="4"/>
                   4
                 </label>
                 <label htmlFor="correct5" className={radioClassString[4]}>
                   <input ref="correct5" type="radio" name="correct" value="5"/>
                   5
                 </label>
                </div>

              <button type="submit" className="signup-cancel-btn btn btn-primary pull-right">Add to your lesson</button>
              <Link activeClassName="active" to="/edit"><button className=" btn btn-default pull-right">Cancel</button></Link>
            </form>
          </div>
        </div>
    )
  },

  checkHandle(event){
    this.state.correctOption = event.target.value;
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var question = this.refs.question.getDOMNode().value.trim();

    var option1 = this.refs.option1.getDOMNode().value.trim();
    var option2 = this.refs.option2.getDOMNode().value.trim();
    var option3 = this.refs.option3.getDOMNode().value.trim();
    var option4 = this.refs.option4.getDOMNode().value.trim();
    var option5 = this.refs.option5.getDOMNode().value.trim();

    var feedback1 = this.refs.feedback1.getDOMNode().value.trim();
    var feedback2 = this.refs.feedback2.getDOMNode().value.trim();
    var feedback3 = this.refs.feedback3.getDOMNode().value.trim();
    var feedback4 = this.refs.feedback4.getDOMNode().value.trim();
    var feedback5 = this.refs.feedback5.getDOMNode().value.trim();

    var options = [option1, option2, option3, option4, option5];
    var allFeedback = [feedback1, feedback2, feedback3, feedback4, feedback5];

    //var time = videojs("#attachmentVideo").currentTime;

    var exercise = {};
    //exercise.time = time;
    exercise.type = "multi";
    exercise.question = question;
    exercise.options = removeBlanks(options);
    exercise.feedback = removeBlanks(allFeedback);
    exercise.correct = this.state.correctOption;

    if (exercise.question.length && exercise.options.length) {
      Actions.createExercise(exercise);
      this.transitionTo('/edit');
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

  onChange: function(event, user){
    this.setState({user: user})
  }
});

module.exports = MultiChoiceCreation;