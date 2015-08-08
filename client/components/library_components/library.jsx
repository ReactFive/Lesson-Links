var Library = React.createClass({
  render:function(){
    return (
      <div id="library">
        <LibLessonEntry lessons = {this.props.lessons}/>
      </div>
    )
  }
});