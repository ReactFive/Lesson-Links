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
        {label: 'True/False', value: 'truefalse'},
        {label: 'Short Answer', value: 'shortanswer'},
      ],
      selectedType : null
    }
  },

  render: function() {
    return (
        <div id="ExerciseTypeSelection" className="">

          <form id="exerciseTypeForm" className="form-inline" onSubmit={this.handleSubmit}>
            <div className="row">
              <Select
                className="col-xs-6 col-xs-offset-1"
                ref="ExerciseType"
                name="Type of Exercise"
                placeholder="Select the type of exercise"
                options={this.state.exerciseTypes}
                onChange={this.updateSelected} />

              <button className="col-xs-3 signup-cancel-btn btn btn-primary">Add to your lesson</button>
            </div>
          </form>
        </div>
    )
  },

  updateSelected: function(choice) {
    this.state.selectedType = choice;
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.chooseType(this.state.selectedType);
  }
})

module.exports = ExerciseTypes;
