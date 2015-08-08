var LibLessonPreview = React.createClass({
  render:function(){
    var lessons = this.props.lessons.map(function(lesson, index){
      return <span key={index}> 
        <ul>
          <li>Title: {lesson.title}</li>
          <li>url: {lesson.url} </li>
          <li>Author: {lesson.teacher.name}</li>
        </ul> 
      </span>
    });
    return (
      <div id="lib-lesson-entry">
      {lessons}
      </div>
    );
  }
});