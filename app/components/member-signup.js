import Ember from 'ember';

export default Ember.Component.extend({
  firebaseApp: Ember.inject.service(),
  error: null,
  actions: {
    githubSignUp(provider) {
      this.sendAction('signIn', provider);
    },
    emailSignUp() {
      var _this = this;
      if (this.get('newEmail') !== '' && this.get('newEmail') !== undefined && this.get('newPassword') !== '' && this.get('newPassword') !== undefined) {
        var params = {
          provider: 'password',
          email: this.get('newEmail'),
          password: this.get('newPassword')
        };
        this.set('newEmail', '');
        this.set('newPassword', '');
        this.get('firebaseApp').auth().createUserWithEmailAndPassword(params.email, params.password).then(function(data) {
          _this.sendAction('signUp');
        }).catch(function(err) {
          console.log(err);
          _this.set('error', err.message);
        });
      } else {
        this.set('error', 'Username must be unique, and password must be at least 6 characters.');
      }
    }
  }
});
