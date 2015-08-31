var React = require('react');

var _ = require('lodash');
var Actions = require('../../../actions');
var Select = require('react-select');

var CategoriesCreation = React.createClass({

  getInitialState: function() {
    var loadedState = this.props.exerciseState || {};
    var ex = loadedState.exercise || {};
    var updating = Object.keys(ex).length;

    var emptyCategories = [
      null,
      {name:"", things:[]},
      {name:"", things:[]},
      {name:"", things:[]},
      {name:"", things:[]}
    ];

    //append empty categories if ex is being loaded and has fewer than 4
    if(ex.categories) {
      for(var i=ex.categories.length; i<5; i++) {
        ex.categories.push({name:"", things:[]});
      }
    }

    return {
      exercise: {
        numCategories: ex.numCategories || 3,
        categories: ex.categories || emptyCategories
      },
      _id: loadedState._id || undefined,
      updating: !!updating,
      options: [
        {value: '2', label: 'Two categories'},
        {value: '3', label: 'Three categories'},
        {value: '4', label: 'Four categories'},
      ]
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

  numCategoriesSetup: function(event) {
    this.state.exercise.numCategories = +event;
    this.setState({exercise: this.state.exercise});
  },

  render: function() {
    var inputs = function(i) {
      var result = [];
      for(var j=0; j<5; j++) {
        result.push(
            <input className="form-control" name={i + '-' + j}
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
    var labelStyle = {
      paddingTop: '10px'
    };

    for(var i=1; i<=this.state.exercise.numCategories; i++) {
      categories.push(
        <div className="panel panel-default col-xs-3" key={'Category' + i}>
          <div className="panel-heading">
            <label htmlFor={'Category' + i + 'Name'}>
              <strong>{'Category ' + i}</strong>
            </label>
          </div>
          <div className="panel-body">
            <input className="form-control" name={i}
              type='text'
              ref={'Category' + i + 'Name'}
              key={'Category' + i + 'Name'}
              value={this.state.exercise.categories[i].name}
              placeholder="Name of category"
              onChange={this.setExerciseState} />
            <label style={labelStyle} htmlFor={'Category' + i + 'Name'}>
              <span class="label label-info">Things in this category</span>
            </label>
            {inputs(i)}
        </div>
      </div>
      )
    }

    return (
      <div className="panel panel-default"
        style={{
          backgroundColor:"white", 
          textAlign:"center"
        }}>
          <div className="well col-md-12">
          <h3>Categories Exercise</h3>
            <label className="correct-answer-label col-md-6 col-md-offset-3">
              <strong>How many categories? </strong>
            </label>
            <Select
              name="Number of Categories"
              className="answer-choices-select col-md-6 col-md-offset-3"
              value=""
              options={this.state.options}
              onChange={this.numCategoriesSetup} />
          </div>
        <div className="panel panel-default">
          <div className="panel-body">
            {categories}
          </div>
        </div>
        <div className="col-md-12">
          <button onClick={this.handleSubmit} className="signup-cancel-btn btn btn-primary margin-right pull-right">Save</button>
          <button onClick={this.handleCancel} className=" btn btn-default pull-right">Cancel</button>
        </div>
      </div>
    )
  },

  exerciseValidity: function() {
    var exercise = this.state.exercise;

    // check that every category has a name
    for(var i=1; i <= exercise.numCategories; i++) {
      if(!exercise.categories[i].name) {
        return {
          isValid: false,
          reason: "Make sure every category has a name"
        }
      }
    }

    // check that no item is repeated
    var itemsObj = {};
    for(var i=1; i <= exercise.numCategories; i++) {
      var thingsList = exercise.categories[i].things;
      _.remove(thingsList, (str) => !str);
      console.log(exercise.categories[i].name, thingsList);
      for(var j=0; j < thingsList.length; j++) {
        if(itemsObj[thingsList[j]]) {
          return {
            isValid: false,
            reason: "Make sure no item is repeated"
          }
        } else {
          itemsObj[thingsList[j]] = true;
        }
      }
    }

    return {
      isValid: true
    }
  },

  handleSubmit: function(event) {
    event.preventDefault();

    // run the validity check, which also removes any blank items
    var validity = this.exerciseValidity();

    var exerciseObj = {};
    var time = videojs("#attachmentVideo").currentTime();
    exerciseObj.exercise = _.cloneDeep(this.state.exercise);
    exerciseObj.time = time;
    exerciseObj.type = "categories";
    exerciseObj._id = this.state._id;

    // remove any categories beyond numCategories, only in the copied version
    var numCategories = exerciseObj.exercise.numCategories
    exerciseObj.exercise.categories = exerciseObj.exercise.categories.slice(0, numCategories+1);


    if(validity.isValid) {
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
      toastr['warning'](validity.reason);
    }
  },

  handleCancel: function(event) {
    event.preventDefault();
    this.props.onComplete();
  },

})

module.exports = CategoriesCreation;
