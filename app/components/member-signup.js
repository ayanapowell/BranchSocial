import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    githubSignUp(provider) {
      this.sendAction('signIn', provider);
    },
    emailSignUp() {
      var params = {
        provider: 'password',
        email: this.get('newEmail'),
        password: this.get('newPassword')
      };
      this.set('newEmail', '');
      this.set('newPassword', '');
      this.sendAction('signUp', params);
    }
  }
});
