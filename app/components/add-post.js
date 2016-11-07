import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var date = moment();
      var params = {
        post: this.get('post'),
        date: date,
        member: this.get('member')
      }
      $('#add-post').trigger('reset');
      console.log(params);
      this.sendAction('savePost', params);
    }
  }
});
