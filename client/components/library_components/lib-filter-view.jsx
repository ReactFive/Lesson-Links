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
