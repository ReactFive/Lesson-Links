var React = require('react');
var _ = require('lodash');
var DnDActions = require('./DnD-actions');


var DropTarget = require('react-dnd').DropTarget;

var Thing = require('./Thing.jsx');

var categoryTarget = {
  drop: function (props, monitor, component) {
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
      <div className="Categories-Category" key={this.props.name}>
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
