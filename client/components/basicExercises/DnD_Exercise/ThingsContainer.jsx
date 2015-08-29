var React = require('react');
var _ = require('lodash');

var DropTarget = require('react-dnd').DropTarget;

var Thing = require('./Thing.jsx');

var categoryTarget = {
  drop: function (props, monitor, component) {
    var droppedItem = monitor.getItem().itemId;
    var currThings = component.state.things;  

    if(currThings.indexOf(droppedItem) === -1) {
      console.log(currThings, droppedItem)
      component.setState({things:currThings.concat([droppedItem])});
    }

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

var ThingsContainer = React.createClass({
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
        <div key={thingName} className="col-xs-2">
          <Thing name={thingName} 
            currentCategory={this.props.name}
            onDraggedElsewhere={this.removeThing}/>
        </div>
      )
    }.bind(this))

    return connectDropTarget(
      <div
        key={this.props.name}
        style={{
          minHeight:'80px',
          backgroundColor:'red',
        }}>
        <div style={{
          textAlign:'center',
          color: 'black',
          fontSize: '18px'
        }}>
          {"Drag each of the items into a category"}
        </div>
        {things}
      </div>
    )
  }
})

module.exports = DropTarget('thing', categoryTarget, collect)(ThingsContainer);

