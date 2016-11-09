import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  isOwner: Ember.computed("session", "post",  function() {
    if(this.get('session').get('currentUser').uid === this.get('post').get('member').get('id')) {
      return true;
    } else {
      return false;
    }
  }),
  actions: {
    deletePost(params) {
      this.sendAction('deletePost', params);
    }
  }
});
