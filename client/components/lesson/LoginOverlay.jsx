var React = require('react');

var LoginOverlay
 = React.createClass({

  render: function() {
    var iconstyles = {
      fontSize: '30px',
      color: '#226395'
    };
    var modalstyles = {
      maxHeight: '40px'
    };
    return (
        <div className="container-fluid col-md-offset-8 animated fadeInDown">
          <div className="modal-dialog modal-sm">
            <div styles={modalstyles} className="modal-content">
              <div className="modal-body" id="special-modal">
                <div className="col-offset-xs-1">
                    <div className="pull-right"><span style={iconstyles} className="glyphicon glyphicon-arrow-up"></span></div>
                    <h5>Please login or register in order to view your lesson</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = LoginOverlay;
