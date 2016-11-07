import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    githubSignIn(provider) {
      this.sendAction('signIn', provider);
    },
    emailSignIn() {
      var provider = 'password';
      var params = {
        email: this.get('email'),
        password: this.get('password')
      };
      this.set('email', '');
      this.set('password', '');
      this.sendAction('signIn', provider, params);
    }
  }
});
