var React = require('react');
var DropTarget = require('react-dnd').DropTarget;

var categoryTarget = {
  drop: function (props) {
    console.log(props);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

var Category = React.createClass({
  render: function() {
    var connectDropTarget = this.props.connectDropTarget;
    var isOver = this.props.isOver;

    return connectDropTarget(
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

module.exports = DropTarget('thing', categoryTarget, collect)(Category);