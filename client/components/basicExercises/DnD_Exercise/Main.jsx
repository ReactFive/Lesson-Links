var React = require('react');
var Reflux = require('reflux');

var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd/modules/backends/HTML5');

var Category = require('./Category.jsx');
var Thing = require('./Thing.jsx');

var DnD_Exercise = React.createClass({

  render: function() {
    var categories = this.categories.map(function(categoryName) {
      return (
        <div className="col-xs-3">
          <Category name={categoryName} />
        </div>
      )
    })

    var things = this.things.map(function(thingName) {
      return (
        <div className="col-xs-2">
          <Thing name={thingName} />
        </div>
      )
    })

    return (
      <div className="container">
        <div className="row" style={{margin:'20px 0px'}}>
          {categories}     
        </div>
        <div className="row">
          {things}
        </div>
      </div>)
  },

  categories: [
    'fruits',
    'vegetables'
  ],

  things: [
    'apple',
    'tomato'
  ]
})

module.exports = DragDropContext(HTML5Backend)(DnD_Exercise);