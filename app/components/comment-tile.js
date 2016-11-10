import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  showForm: false,
  isOwner: Ember.computed("this.get('session')", "this.get('comment')",  function() {
    if(this.get('session').get('currentUser').uid === this.get('comment').get('member').get('id')) {
      return true;
    } else {
      return false;
    }
  }),
  actions: {
    showForm() {
      if (this.showForm) {
        this.set('showForm', false);
      } else {
        this.set('showForm', true);
      }
    },
    updateComment(comment) {
      var params = {
        content: this.get('editComment'),
      };
      this.sendAction('updateComment', params, comment);
      this.set('showForm', false);
    },
    deleteComment(params) {
      this.sendAction('deleteComment', params);
    }
  }
});
