import Ember from 'ember';

export default Ember.Component.extend({
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

    }
  }
});
