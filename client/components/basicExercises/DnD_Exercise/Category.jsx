var React = require('react');

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