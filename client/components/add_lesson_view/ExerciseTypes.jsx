var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');

var Select = require('react-select');


var ExerciseTypes = React.createClass({
  getInitialState: function() {
    return {
      exerciseTypes: [
        {label: 'Multiple Choice', value: 'multiplechoice'},
        {label: 'True/False', value: 'truefalse'}
      ],
      selectedType : null
    }
  },

  // shouldComponentUpdate: function() {
  //   return false;
  // },

  render: function() {
    return (
      <div className="container">
        <div id="ExerciseTypeSelection" className="col-md-6 col-md-offset-3">

          <form name="exerciseTypeForm" onSubmit={this.handleSubmit}>
            <Select
              ref="ExerciseType"
              name="Type of Exercise"
              placeholder="Select the type of exercise"
              options={this.state.exerciseTypes}
              onChange={this.updateSelected} />

            <button className="signup-cancel-btn btn btn-primary pull-right">Add to your lesson</button>
          </form>
        </div>
      </div>
    )
  },

  updateSelected: function(choice) {
    this.state.selectedType = choice;
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.chooseType(this.state.selectedType);
    // Actions.createExercise({
    //   time: videojs('attachmentVideo').currentTime(),
    //   type: this.state.selectedType
    // });
  }
})

module.exports = ExerciseTypes;
