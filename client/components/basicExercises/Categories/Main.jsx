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
          <div className="container-fluid animated fadeIn">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="well text-center">
                  <h4>{this.state.data.outcome}</h4>
                   <div className="row" id="dragdrop-feedback-btns">
                      <div className="col-md-6">
                        <button onClick={DnDActions.resumeExercise} className="btn btn-success btn-block">Resume Exercise</button>
                      </div>
                      <div className="col-md-6">
                        <button onClick={this.onComplete} className="btn btn-primary btn-block">Continue Video</button>
                      </div>
                   </div>
                </div>
              </div>
            </div>
        </div>
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
    <div className="container-fluid animated fadeIn">
      <div className="modal-dialog-lg">
        <div className="modal-content">
          <div className="well container Categories-Container">
            <div className="row" style={{margin:'20px 0px'}}>
              {renderedCategories}
            </div>
            <div className="row">
              <ThingsContainer things={unassignedThings} name={"unassigned"} />
            </div>
            <div className="col-md-4 col-md-offset-4">
              <button onClick={this.submitAnswer} className="btn btn-block btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
    }
  },
});

module.exports = DragDropContext(HTML5Backend)(DnD_Exercise);
