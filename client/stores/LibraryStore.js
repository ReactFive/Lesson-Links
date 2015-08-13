var Reflux = require('reflux');
var api = require('../utils/api');
var Actions = require('../actions');
var _ = require('lodash');
var AuthStore = require('./AuthStore')

  // onUpdateUser: function(){
  //   return Api.getUser()
  //   .then(function(res){
  //     this.user = res.data.user
  //     console.log(this.user)
  //     updateUser.complete({lessons : this.user.lessons})
  //   })
  //   .catch(function(res){
  //     if (res.headers.status === 401 || res.data === "Unauthorized") {
  //       updateUser.failed()
  //       toastr["error"]("The user did not exist");
  //     } else {
  //       updateUser.failed()
  //       toastr["error"]("There was a problem refreshing the page");
  //     }
  //   }.bind(this));
  // },


module.exports = Reflux.createStore({
  listenables: [Actions],

  init: function(){
  },
  togglePublish: function(lesson){
    lesson.published = !lesson.published
    api.updateLesson(lesson)
    .then(function(){
      AuthStore.getUser()
    })
  },
  onUpdateUser: function(user){
    console.log('updating user')
    console.log(user)
  },

  redirectLesson: function(){
  }
})