var React = require('react');
var Link = require('react-router').Link;
var Nav = require('./header-footer/nav.jsx');

require('../../sass/LandingPage.scss');

var Home = module.exports = React.createClass({

  render: function () {
    return (
        <div>
          <div className='container'>
            <h1 className='text-center'>Lesson Links</h1>
            <h3 className='text-center'>Annotated Educational Videos.</h3>
          </div>
        </div>
    )
  }
});