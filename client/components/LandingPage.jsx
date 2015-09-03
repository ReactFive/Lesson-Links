var React = require('react');
var Link = require('react-router').Link;
var Nav = require('./header-footer/nav.jsx');

// require('../../sass/LandingPage.scss');

var Home = module.exports = React.createClass({

  render: function () {


    return (
<div id="myCarousel" className="carousel slide">
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="item active">
      <div className="container">
        <div className="carousel-caption">
          <h1 className="logo">Lesson Links</h1>
          <h3 className="sublogo">Annotated Educational Videos</h3>
          <p>
            <p>
            </p>
          </p>
        </div>
      </div>
    </div>
    <div className="item item2">
      <div className="container">
        <div className="carousel-caption">
          <div className="row">
              <h1>How to make a Lesson Link...</h1>
            <div className="steps col-lg-4">
              <h1 className="stepsHead">Step 1:</h1>
              <img className="imgSteps hidden-xs hidden-sm hidden-md" id="step1" src="../../public/assets/step1.png" />
              <h3 className="stepsInst">Drop in a YouTube URL.</h3>            
            </div>
            <div className="steps col-lg-4">
              <h1 className="stepsHead">Step 2:</h1>
              <img className="imgSteps hidden-xs hidden-sm hidden-md" id="step2" src="../../public/assets/step2.png" />
              <h3 className="stepsInst">Set-up Exercises.</h3>
            </div>
            <div className="steps col-lg-4">
              <h1 className="stepsHead">Step 3:</h1>
              <img id="step3" className="imgSteps hidden-xs hidden-sm hidden-md" src="../../public/assets/step3.png" />
              <h3 className="stepsInst">Share your Link!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="item item3">
      <div className="container">
        <div className="carousel-caption">
          <div className="row">
            <div className="teamInfo col-md-6 portfolio-item">
              <h1 className="whiteHeader">Our Team: React5</h1>
              <a href="https://github.com/ReactFive/Lesson-Links" title="View our GitHub!" target="_blank">
                <img id="react5" className="" src="../../public/assets/TeamImage2.png"/>
              </a>
            </div>
          <div className="carousel-caption">
              <div className="teamInfo col-md-6 portfolio-item">
                <h1 className="whiteHeader">Our Tech</h1>
                <img id="ourStack" className="" src="../../public/assets/ourstack.png"/>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span className="icon-prev"></span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="icon-next"></span>
  </a>  
</div>
    )
  }
});