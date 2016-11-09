import Ember from 'ember';

export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signUp() {
      this.refresh();
    },
    goToMembers() {
      this.transitionTo('members');
    },
    registerMember(params){
      var newMember = this.store.createRecord('member', params);
      newMember.save();
      this.transitionTo('members');
    },
    signIn: function(provider, params) {
      var _this = this;
      if (params === undefined) {
        params = {
          email: '',
          password: ''
        }
      };
      this.get('session').open('firebase', { provider: provider, email: params.email, password: params.password}).then(function(data) {
        console.log(_this.get('session').get('currentUser').photoURL);
        var newEmail = data.currentUser.email;
        _this.get('store').query('member', {
          orderBy: 'email',
          equalTo: newEmail
        }).then(function(response) {
          if (response.get('firstObject')) {
            _this.transitionTo('members');
          }
        }).catch(function(err) {
          console.log(err.message);
        });
      });
    }
  }
});
