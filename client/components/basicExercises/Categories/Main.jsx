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
    DnDActions.triggerDnDStore();
  },

  getInitialState: function() {
    return this.props.exercise || {};
  },

  render: function() {
    if(!this.state.data) return null;

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
      <div className="container">
        <div className="row" style={{margin:'20px 0px'}}>
          {renderedCategories}     
        </div>
        <div className="row">
          <ThingsContainer things={unassignedThings} name={"unassigned"} />
        </div>
      </div>
    )
  },
})

module.exports = DragDropContext(HTML5Backend)(DnD_Exercise);
