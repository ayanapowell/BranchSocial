import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost(params) {
      this.sendAction('deletePost', params);
    }
  }
});
