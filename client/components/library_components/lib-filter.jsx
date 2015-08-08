var React = require('react');

var LibFilterHeader = require('./lib-filter-header.jsx');
var Library = require('./library.jsx');

var LibFilter = React.createClass({
  render:function(){
    return (
      <div id="library-filter">
        <LibFilterHeader />
        <Library lessons = {this.props.lessons}/>
      </div>
    )
  }
});

module.exports = LibFilter;