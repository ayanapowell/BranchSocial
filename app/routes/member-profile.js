import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('member', params.member_id);
  },
  actions: {
    savePost(params) {
      var _this = this;
      var newPost = this.store.createRecord('post', params);
      var memberEmail = params.member.email;
      _this.get('store').query('member', {
        orderBy: 'email',
        equalTo: memberEmail
      }).then(function(response) {
        console.log(response.get('firstObject').get('posts'));
        response.get('firstObject').get('posts').addObject(newPost);
        newPost.save().then(function() {
          response.save();
          // this.refresh(); not working
        });
      });
      // var member = params['member'];
      // member.get('posts').addObject(newPost);
      // newPost.save().then(function() {
      //   return member.save();
      // });
    },
    deletePost(params) {
      params.destroyRecord();
    },
    updatePost(params, post) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          post.set(key, params[key]);
        }
      });
      post.save();
    },
    saveComment(post, params) {
      var _this = this;
      var newComment = this.store.createRecord('comment', params);
      var memberEmail = params.member.email;
      _this.get('store').query('member', {
        orderBy: 'email',
        equalTo: memberEmail
      }).then(function(response) {
        response.get('firstObject').get('comments').addObject(newComment);
        post.get('comments').addObject(newComment);
        newComment.save().then(function() {
          response.save();
          post.save();
        });
      });
      // post.get('comments').addObject(newComment);
      // member.get('comments').addObject(newComment);
      // newComment.save().then(function() {
      //   member.save();
      //   post.save();
      // });
    }
  }
});
