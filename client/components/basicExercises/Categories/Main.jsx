var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd/modules/backends/HTML5');

var Thing = require('./Thing.jsx');
var ThingsContainer = require('./ThingsContainer.jsx');
var Category = require('./Category.jsx');

var DnDStore = require('./DnD-Store.jsx');
var DnDActions = require('./DnD-actions');

var DnD_Exercise = React.createClass({
  mixins: [Reflux.connect(DnDStore, "data")],

  componentWillMount: function() {
    console.log("props to Main", this.props);
    DnDActions.loadDnDStore(this.props.exercise.categories);
  },

  submitAnswer: function() {
    DnDActions.evaluateResponse();
  },

  onComplete: function() {
    var result = {
      answer : JSON.stringify(this.state.data.categories),
      correct : this.state.data.correct
    }

    this.props.onComplete(result);
  },

  render: function() {
    if(!this.state.data) return null;

    if(this.state.data.outcome) {
      return (
        <div className="container Categories-Container">
          <p>{this.state.data.outcome}</p>
          <button onClick={DnDActions.resumeExercise} className="btn btn-primary">Resume Exercise</button>
          <button onClick={this.onComplete} className="btn btn-primary">Continue Video</button>
        </div>
      )
    } else {
      var categories = _.omit(this.state.data.categories, "unassigned");
      var renderedCategories = _.map(categories, function(things, categoryName) {
        return (
          <div key={categoryName} className="col-xs-3">
            <Category name={categoryName} things={things}/>
          </div>
        )
      })

      var unassignedThings = this.state.data.categories.unassigned
      return (
        <div className="container Categories-Container">
          <div className="row" style={{margin:'20px 0px'}}>
            {renderedCategories}     
          </div>
          <div className="row">
            <ThingsContainer things={unassignedThings} name={"unassigned"} />
          </div>
          <button onClick={this.submitAnswer} className="btn btn-primary">Submit</button>
        </div>
      )
    }
  },
})

module.exports = DragDropContext(HTML5Backend)(DnD_Exercise);
