var React = require('react');

var TextInput = require('../TextInput.jsx');

var CategoriesCreation = React.createClass({

  getInitialState: function() {
    var loadedState = this.props.exerciseState || {};
    var ex = loadedState.exercise || {};
    var updating = Object.keys(ex).length;

    return {
      exercise: {
        numCategories: ex.numCategories || 3,
        categories: ex.categories
      },
      _id: loadedState._id || undefined,
      updating: !!updating
    }
  },

  render: function() {
    var i=0;

    return (
      <div className="container" 
        style={{
          backgroundColor:"white", 
          textAlign:"center",
          minHeight:"400px",
        }}>
        <h3>Create/Update a Categories Exercise</h3>
        <div className="row">
          <div className="col-xs-3">
            <TextInput 
              wrapperClass=""
              htmlFor={'Category' + i + 'Name'}
              id={'Category' + i + 'Name'}
              ref={'Category' + i + 'Name'}
              name={'Category' + i + 'Name'}

            />
          </div>
        </div>
      </div>
    )
  }

})

module.exports = CategoriesCreation;