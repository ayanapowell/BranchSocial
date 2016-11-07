import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('post', params);
      var member = params.member;
      member.get('posts').addObject(newPost); // or member.get('post') ??
      newPost.save().then(function() {
        return member.save();
      });
      this.transitionTo('members');
    }
  }
});
