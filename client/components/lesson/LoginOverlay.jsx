var React = require('react');

var LoginOverlay
 = React.createClass({

  render: function() {
    return (
      <div className="login-overlay">
        <div className="arrow-box"> 
          <p className="arrow-box-message">Login or Signup to view this lesson!</p>
        	{/*<img className="arrow-box-message" src="../../public/assets/Login.png" />*/}
        </div>
      </div>
    );
  }

});

module.exports = LoginOverlay;
