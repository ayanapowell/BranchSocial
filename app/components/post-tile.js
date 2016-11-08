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
      if (this.showForm === false) {
        this.set('showForm', true);
      } else {
        this.set('showForm', false);
      }

    }
  }
});
