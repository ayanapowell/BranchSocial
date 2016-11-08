import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    deletePost(params) {
      this.sendAction('deletePost', params);
    },
    updatePost(post) {
      var date = moment().format('LLLL');
      var params = {
        content: this.get('content'),
        date: date
      }
      this.sendAction('updatePost', params, post);
    },
    showForm() {
      this.set('showForm', true);
    }
  }
});
