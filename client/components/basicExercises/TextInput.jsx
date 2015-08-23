var React = require('react');


var TextInput = React.createClass({
  propTypes: {
    wrapperClass: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    id: React.PropTypes.string,
    ref: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    key: ReactPropTypes.number
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
           key={this.props.key}
           value={this.props.value}
           onChange={this.props.onChange}
           placeholder={this.props.placeholder}/>
      </div>
    )
  }
});

module.exports = TextInput;