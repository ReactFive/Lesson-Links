var React = require('react');


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
      this.state.exercise.categories[splitted[0]][splitted[1]] = event.target.value;
      this.setState({exercise : this.state.exercise});
    }
  },

  render: function() {
    var inputs = function(i) {
      var result = [];
      for(var j=0; j<5; j++) {
        result.push(
          <input name={i + '-' + 0}
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
      </div>
    )
  }

})

module.exports = CategoriesCreation;