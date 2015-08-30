var React = require('react');

var DragSource = require('react-dnd').DragSource;
var DnDActions = require('./DnD-actions');


var itemSource = {
  beginDrag: function (props) {
    return {
      itemId: props.name,
      startCategory: props.currentCategory
    };
  },

  endDrag: function(props, monitor, component) {
    if(!monitor.didDrop()) {
      return
    }

    var startCategory = monitor.getItem().startCategory;
    var endCategory = monitor.getDropResult().endCategory;
    if(startCategory !== endCategory) {
      DnDActions.moveThingBetweenCategories(monitor.getItem().itemId, startCategory, endCategory)
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


var Thing = React.createClass({
  

  render: function() { 
    var connectDragSource = this.props.connectDragSource;
    var isDragging = this.props.isDragging;

    return connectDragSource(
      <div
        style={{
          height:'20px',
          backgroundColor:'green',
          textAlign: 'center'
        }}>
        {this.props.name}
      </div>
    )
  }

})

module.exports = DragSource('thing', itemSource, collect)(Thing);
