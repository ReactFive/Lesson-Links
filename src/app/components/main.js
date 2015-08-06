var React = require('react')
// var Hello = require('./hello')

var Hello = React.createClass({
  render: function(){
    return (
      <div>
        Hello Test 
      </div>
    )
  }
});

React.render(<Hello />, document.getElementById('app'));
