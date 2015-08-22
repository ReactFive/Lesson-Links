var request = require('supertest');
var app = ('../server/index.js');
var mongoose = require('mongoose');
//var Lesson = require('mongoose').model('Lesson');
var agent = request.agent(app);
/*
describe('Lesson Crud Test', function(){
  it('Should allow a lesson to be posted and return a lesson object with _id', function(done) {
    var lessonPost = {
      title: 'The great test',
      lesson_url: '/the-great-lesson',
      video_url: 'https://www.youtube.com/watch?v=_fbkFXj6CDs',
      teacher: '55d517497331fe6e860953c4'
    };

    agent.post('api/lesson/the-great-lesson')
        .send(lessonPost)
        .expect(200)
        .end(function (err, results) {
          results.body.read.should.equal(false);
          results.body.should.have.property('_id');
        })
  });

    afterEach(function(done){
      Lesson.remove().exec();
      done();
  })
});

*/