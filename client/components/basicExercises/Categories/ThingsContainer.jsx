var React = require('react');
var _ = require('lodash');

var DropTarget = require('react-dnd').DropTarget;

var Thing = require('./Thing.jsx');

var categoryTarget = {
  drop: function (props, monitor, component) {
    // var droppedItem = monitor.getItem().itemId;
    // var currThings = component.state.things;  

    // if(currThings.indexOf(droppedItem) === -1) {
    //   console.log(currThings, droppedItem)
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

var ThingsContainer = React.createClass({
  getInitialState: function() {
    return {
      things : this.props.things
    }
  },

  render: function() {
    var connectDropTarget = this.props.connectDropTarget;
    var isOver = this.props.isOver;

    var things = this.state.things.map(function(thingName) {
      return (
        <div key={thingName} className="col-xs-2">
          <Thing name={thingName} 
            currentCategory={this.props.name}/>
        </div>
      )
    }.bind(this))

    return connectDropTarget(
      <div className="panel panel-primary panel-default"
        key={this.props.name}>
        <div className="panel-heading text-center">
          <div className="panel-title">{"Drag each of the items into a category"}</div>
        </div>
        <div className="panel-body">
         {things}
        </div>
      </div>
    )
  }
})

module.exports = DropTarget('thing', categoryTarget, collect)(ThingsContainer);

