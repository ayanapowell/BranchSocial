import Ember from 'ember';
export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signUp(params) {
      var _this = this;
      this.get('firebaseApp').auth().createUserWithEmailAndPassword(params.email, params.password).then(function(data) {
        console.log(data.currentUser);
      }).catch(function(err) {
        console.log(err);
      });
    },
    signIn: function(provider, params) {
      if (params === undefined) {
        params = {
          email: '',
          password: ''
        }
      }
      this.get('session').open('firebase', { provider: provider, email: params.email, password: params.password}).then(function(data) {
        console.log(data);
      });
    },
    signOut: function() {
      this.get('session').close();
      this.transitionTo('index');
    }
  }
});
