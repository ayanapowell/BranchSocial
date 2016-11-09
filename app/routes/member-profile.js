import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('member', params.member_id);
  },
  actions: {
    savePost(params) {
      console.log(params);
      var newPost = this.store.createRecord('post', params);
      var member = params['member'];
      member.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return member.save();
      });
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
      var newComment = this.store.createRecord('comment', params);
      var member = params.member;

      post.get('comments').addObject(newComment);
      member.get('comments').addObject(newComment);
      newComment.save().then(function() {
        member.save();
        post.save();
      });
    }
  }
});
