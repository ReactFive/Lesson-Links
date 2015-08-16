var React = require('react');


var TextInput = React.createClass({
  propTypes: {
    wrapperClass: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    id: React.PropTypes.string,
    placeholder: React.PropTypes.string
  },
  render: function(){
    return (
      <div className={this.props.wrapperClass}>
        <label htmlFor={this.props.name}><strong>{this.props.label}</strong></label>
        <input id={this.props.id}
           className="form-control"
           name={this.props.name}
           type='text'
           ref={this.props.name}
           placeholder={this.props.placeholder}/>
      </div>
    )
  }
});

module.exports = TextInput;