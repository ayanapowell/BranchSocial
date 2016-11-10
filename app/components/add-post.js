import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    savePost() {
      var date = moment().format('LLLL');
      var params = {
        content: this.get('content'),
        date: date,
        member: this.get('member')
      };
      $('#add-post').trigger('reset');
      this.sendAction('savePost', params);
    }
  }
});
