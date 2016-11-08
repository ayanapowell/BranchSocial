import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    savePost(params) {
      this.sendAction('savePost', params);
    },
    deletePost(params) {
      this.sendAction('deletePost', params)
    },
    updatePost(params, post) {
      this.sendAction('updatePost', params, post);
    },
    showForm() {
      this.set('showForm', true);
    },
    editInfo(member, params){
      this.sendAction('editInfo', member, params);
    },
  }
});
