import Ember from 'ember';

export default Ember.Component.extend({
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
