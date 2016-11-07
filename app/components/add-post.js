import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      // var date = moment().format('MMMM Do YYYY, h:mm a');
      var date = moment("20161106","YYYYMMDD").fromNow();
      var params = {
        post: this.get('post'),
        date: date
      }
      $('#add-post').trigger('reset');
      this.sendAction('savePost', params);
    }
  }
});
