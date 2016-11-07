import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var date = moment("20161106","YYYYMMDD").fromNow();
      var params = {
        post: this.get('post'),
        date: date
      }
      console.log(params['date']);
      $('#add-post').trigger('reset');
      this.sendAction('savePost', params);
    }
  }
});
