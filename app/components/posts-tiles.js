import Ember from 'ember';

export default Ember.Component.extend({
  friendList: Ember.computed("member.friends", function() {
    var friends = [];
    var posts = [];
    var thisObj = this;
    this.get('member').get('friends').then(function(response) {
      response.forEach(function(friend) {
        friends.addObject(friend);
      });

      friends.forEach(function(friend) {
        friend.get('posts').then(function(result) {
          posts.addObjects(result);
        });
      });
      thisObj.set('friendList', posts);
    });
  }),

  postList: Ember.computed("friendList", function() {
  }),

  actions: {
    deletePost(params) {
      this.sendAction('deletePost', params);
    },
    updatePost(params, post) {
      this.sendAction('updatePost', params, post);
    },
    saveComment(post, params) {
      console.log("post-tiles");
      this.sendAction('saveComment', post, params);
    }
  }
});
