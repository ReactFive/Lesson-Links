var React = require('react');
var Link = require('react-router').Link;
var Nav = require('./header-footer/nav.jsx');
var Home = module.exports = React.createClass({

  render: function () {
    return (
        <div>
          <div className='container'>
            <h3 className='text-center'>This will be home.</h3>
          </div>
        </div>
    )
  }
});