import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  showForm: false,
  isOwner: Ember.computed("this.get('session')", "this.get('post')",  function() {
    if(this.get('session').get('currentUser').uid === this.get('post').get('member').get('id')) {
      return true;
    } else {
      return false;
    }
  }),
  actions: {
    deletePost(params) {
      this.sendAction('deletePost', params);
    },
    updatePost(post) {
      var date = moment().format('LLLL');
      var params = {
        content: this.get('content'),
        date: date
      };
      this.set('showForm', false);
      this.sendAction('updatePost', params, post);
    },
    showForm() {
      if (this.showForm === false) {
        this.set('showForm', true);
      } else {
        this.set('showForm', false);
      }
    },
    saveComment(post) {
      console.log(post);
      var date = moment().format('LLLL');
      var params = {
        content: this.get('commentContent'),
        date: date,
        member: this.get('member')
      };
      this.sendAction('saveComment', post, params);
    }
  }
});
