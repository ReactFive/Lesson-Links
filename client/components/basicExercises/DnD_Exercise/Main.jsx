var React = require('react');
var Reflux = require('reflux');
var _ = require('lodash');

var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd/modules/backends/HTML5');

var Thing = require('./Thing.jsx');
var ThingsContainer = require('./ThingsContainer.jsx');
var Category = require('./Category.jsx');

var DnD_Exercise = React.createClass({

  getInitialState: function() {
    return {
      categories: [
        'fruits',
        'vegetables'
      ],
      things: [
        'apple',
        'tomato'
      ]
    }
  },

  removeThing: function(thingObj) {
    this.setState({things : _.without(this.state.things, thingObj.itemId)});
  },

  render: function() {
    var categories = this.state.categories.map(function(categoryName) {
      return (
        <div key={categoryName} className="col-xs-3">
          <Category name={categoryName} things={[]}/>
        </div>
      )
    })

    return (
      <div className="container">
        <div className="row" style={{margin:'20px 0px'}}>
          {categories}     
        </div>
        <div className="row">
          <ThingsContainer things={this.state.things} name={"unassigned"} />
        </div>
      </div>
    )
  },

  
})

module.exports = DragDropContext(HTML5Backend)(DnD_Exercise);
