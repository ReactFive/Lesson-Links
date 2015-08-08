var LibLessonEntry = React.createClass({
  render:function(){
    return (
      <div id="lib-lesson-entry">
        <LibLessonPreview lessons = {this.props.lessons} />
        <LibLessonLock />
      </div>
    )
  }
});
