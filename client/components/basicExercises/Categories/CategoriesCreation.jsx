var React = require('react');

var _ = require('lodash');
var Actions = require('../../../actions');

var CategoriesCreation = React.createClass({

  getInitialState: function() {
    var loadedState = this.props.exerciseState || {};
    var ex = loadedState.exercise || {};
    var updating = Object.keys(ex).length;

    var emptyCategories = [
      null,
      {name:"", things:[]},
      {name:"", things:[]},
      {name:"", things:[]}
    ];

    return {
      exercise: {
        numCategories: ex.numCategories || 3,
        categories: ex.categories || emptyCategories
      },
      _id: loadedState._id || undefined,
      updating: !!updating
    }
  },

  setExerciseState: function(event) {
    var nameOfInput = event.target.name;
    if(nameOfInput.indexOf('-') === -1) {
      //in this case, the input was a category name
      this.state.exercise.categories[nameOfInput].name = event.target.value;
      this.setState({exercise : this.state.exercise});
    } else {
      //in this case, the input was for an item in a category
      //the category index if before the -, the thing index is after
      var splitted = nameOfInput.split('-');
      this.state.exercise.categories[splitted[0]].things[splitted[1]] = event.target.value;
      this.setState({exercise : this.state.exercise});
    }
  },

  componentDidUpdate: function() {
    console.log(this.state.exercise.categories[1].things);
  },

  render: function() {
    var inputs = function(i) {
      var result = [];
      for(var j=0; j<5; j++) {
        result.push(
          <input name={i + '-' + j}
            type='text'
            ref={'Category' + i + 'Thing' + j}
            key={'Category' + i + 'Thing' + j}
            value={this.state.exercise.categories[i].things[j]}
            placeholder="item name"
            onChange={this.setExerciseState} />
        );
      }

      return result;
    }.bind(this);

    var categories = [];
    for(var i=1; i<=this.state.exercise.numCategories; i++) {
      categories.push(
        <div className="col-xs-3" key={'Category' + i}>
          <label htmlFor={'Category' + i + 'Name'}>
            <strong>{'Category ' + i}</strong>
          </label>
          <input name={i}
            type='text'
            ref={'Category' + i + 'Name'}
            key={'Category' + i + 'Name'}
            value={this.state.exercise.categories[i].name}
            placeholder="Name of category"
            onChange={this.setExerciseState} />
          <label htmlFor={'Category' + i + 'Name'}>
            {"Things in this category"}
          </label>
          {inputs(i)}
        </div>
      )
    }

    return (
      <div className="container" 
        style={{
          backgroundColor:"white", 
          textAlign:"center",
          minHeight:"400px",
        }}>
        <h3>Create/Update a Categories Exercise</h3>
        <div className="row">
          {categories}
        </div>
        <button onClick={this.handleSubmit} className="signup-cancel-btn btn btn-primary margin-right">Save</button>
        <button onClick={this.handleCancel} className=" btn btn-default">Cancel</button>
      </div>
    )
  },

  handleSubmit: function(event) {
    event.preventDefault();

    var exerciseObj = {};
    var time = videojs("#attachmentVideo").currentTime();
    exerciseObj.exercise = _.cloneDeep(this.state.exercise);
    exerciseObj.time = time;
    exerciseObj.type = "categories";
    exerciseObj._id = this.state._id;

    if (!this.state.updating) {
      Actions.createExercise(exerciseObj);
      this.props.onComplete();
      toastr['success']('Your new exercise has been created');
    } else {
      Actions.updateExercise(exerciseObj);
      console.log("updated exercise that was sent to store", exerciseObj);
      this.props.onComplete();
      toastr['success']('Your exercise has been updated');
    }
  },

  handleCancel: function(event) {
    event.preventDefault();
    this.props.onComplete();
  },

})

module.exports = CategoriesCreation;
