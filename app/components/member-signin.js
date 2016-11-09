import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),
  error: null,
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
      var _this = this;
      if (params === undefined) {
        params = {
          email: '',
          password: ''
        }
      };
      this.get('session').open('firebase', { provider: provider, email: params.email, password: params.password}).then(function(data) {
        var newEmail = data.currentUser.email;
        _this.get('store').query('member', {
          orderBy: 'email',
          equalTo: newEmail
        }).then(function(response) {
          if (response.get('firstObject')) {
            console.log('got here!');
            _this.sendAction('goToMembers');
          }
        })
      }).catch(function(err) {
        console.log(err.message);
        _this.set('error', err.message);
      });;
    }
  }
});
