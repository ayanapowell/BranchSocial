import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  sortBy: ['date:desc'],
  sortedPosts: Ember.computed.sort('member.posts', 'sortBy'),
  actions: {
    savePost(params) {
      this.sendAction('savePost', params);
    },
    deletePost(params) {
      this.sendAction('deletePost', params);
    },
    updatePost(params, post) {
      this.sendAction('updatePost', params, post);
    },
    saveComment(post, params) {
      this.sendAction('saveComment', post, params);
    },
    updateComment(params, comment) {
      this.sendAction('updateComment', params, comment);
    },
    deleteComment(params) {
      this.sendAction('deleteComment', params);
    }
  }
});
