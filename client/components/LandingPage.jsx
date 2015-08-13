var React = require('react');
var Link = require('react-router').Link;
var Nav = require('./header-footer/nav.jsx');

// require('../../sass/LandingPage.scss');

var Home = module.exports = React.createClass({

  render: function () {
    return (
        <div className="Site-content">
          <div className='container'>
            <h1 className="logo">Lesson Links</h1>
            <h3 className='sublogo'>Annotated &nbsp;  Educational &nbsp;  Videos.</h3>
            <div className="teaser">
              <h3>Learn More</h3>
            </div>
          </div>
        </div>
    )
  }
});