var React = require('react');

var Textarea = React.createClass({
  propTypes: {
    wrapperClass: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    id: React.PropTypes.string,
    ref: React.PropTypes.string,
    value: React.PropTypes.string,
    key: React.PropTypes.number
  },
  render: function(){
    return (
        <div className={this.props.wrapperClass}>
          <label htmlFor={this.props.name}>{this.props.label}</label>
          <textarea id={this.props.id}
            className={this.props.className}
            placeholder={this.props.placeholder}
            name={this.props.name}
            key={this.props.key}
            rows={this.props.rows}
            ref={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}/>
        </div>
    )
  }
});

module.exports = Textarea;