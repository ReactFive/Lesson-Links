var React = require('react');
var _ = require('lodash');
var DnDActions = require('./DnD-actions');


var DropTarget = require('react-dnd').DropTarget;

var Thing = require('./Thing.jsx');

var categoryTarget = {
  drop: function (props, monitor, component) {
    // var droppedItem = monitor.getItem().itemId;
    // var currThings = component.state.things;  

    // if(currThings.indexOf(droppedItem) === -1) {
    //   component.setState({things:currThings.concat([droppedItem])});
    // }

    return {
      endCategory: component.props.name
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

var Category = React.createClass({
  getInitialState: function() {
    return {
      things : this.props.things
    }
  },

  removeThing: function(thingObj) {
    if(thingObj.startCategory === this.props.name) {
      //console.log(thingObj.startCategory, this.props.name)
      this.setState({things : _.without(this.state.things, thingObj.itemId)});
    }
  },

  render: function() {
    var connectDropTarget = this.props.connectDropTarget;
    var isOver = this.props.isOver;

    var things = this.state.things.map(function(thingName) {
      return (
          <Thing name={thingName} key={thingName}
            currentCategory={this.props.name}
            onDraggedElsewhere={this.removeThing}/>
      )
    }.bind(this))

    return connectDropTarget(
      <div
        key={this.props.name}
        style={{
          minHeight:'150px',
          backgroundColor:'white',
        }}>
        <div style={{textAlign:'center'}}>
          {this.props.name}
        </div>
        <div>
          {things}
        </div>
      </div>
    )
  }
})

module.exports = DropTarget('thing', categoryTarget, collect)(Category);
