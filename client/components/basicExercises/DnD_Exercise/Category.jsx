var React = require('react');
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd/modules/backends/HTML5');

var Category = React.createClass({
  render: function() {
    return (
      <div
        key={this.props.name}
        style={{
          height:'50px',
          backgroundColor:'white',
          textAlign: 'center'
        }}>
        {this.props.name}
      </div>
    )
  }
})

module.exports = Category;