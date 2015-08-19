var React = require('react');

var LoginOverlay
 = React.createClass({

  render: function() {
    return (
      <div className="login-overlay">
        <div> 
          You have to login! 
        </div>
      </div>
    );
  }

});

module.exports = LoginOverlay
;