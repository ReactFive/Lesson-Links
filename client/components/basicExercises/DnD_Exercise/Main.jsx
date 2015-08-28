var React = require('react');
var Reflux = require('reflux');

var Category = require('./Category.jsx');

var DnD_Exercise = React.createClass({

  render: function() {
    var categories = this.categories.map(function(categoryName) {
      return (
        <div className="col-xs-3">
          <Category name={categoryName} />
        </div>
      )
    })

    return (
      <div className="container">
        <div className="row">
          
            {categories}
          
        </div>
      </div>)
  },

  categories: [
    'fruits',
    'vegetables'
  ]
})

module.exports = DnD_Exercise;