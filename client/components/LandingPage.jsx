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
          <p>To be colored, styled, and replaced with a gif soon! </p>
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
              <h3>Step 1:<br/>Drop in a YouTube URL.</h3>
              <img id="step1" src="../../public/assets/step1.png" />
              <p>You can use any YouTube URL to create a Lesson on Lesson Links!</p>
            </div>
            <div className="steps col-lg-4">
              <h3>Step 2:<br/>Set-up Exercises.</h3>
              <img id="step2" src="../../public/assets/step2.png" />
              <p>Choose between True/False, Short Answer, Multiple Choice, or Drag-and-Drop questions to your Lesson!</p>
            </div>
            <div className="steps col-lg-4">
              <h3>Step 3:<br/>Share your Link!</h3>
              <img id="step3" src="../../public/assets/step3.png" />
              <p>Share your published link with students to start a classroom conversation online!</p>
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
              <h1>Our Team: React5</h1>
              <img id="react5" className="" src="../../public/assets/TeamImage2.png"/>
            </div>
          <div className="carousel-caption">
              <div className="teamInfo col-md-6 portfolio-item">
                <h1>Our Tech</h1>
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