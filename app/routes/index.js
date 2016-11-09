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
        _this.refresh();
      }).catch(function(err) {
        console.log(err);
      });
    },
    registerMember(params){
      var newMember = this.store.createRecord('member', params);
      console.log(newMember.get('firstName'));
      newMember.save();
      alert("member saved?");
      this.transitionTo('members');
    },
    signIn: function(provider, params) {
      var _this = this;
      if (params === undefined) {
        params = {
          email: '',
          password: ''
        }
      }
      this.get('session').open('firebase', { provider: provider, email: params.email, password: params.password}).then(function(data) {
        var newEmail = data.currentUser.email;
        _this.get('store').query('member', {
          orderBy: 'email',
          equalTo: newEmail
        }).then(function(response) {
          if (response.get('firstObject')) {
            _this.transitionTo('members');
          }
        });
      });
    }
  }
});

//
// https://branch-social.firebaseio.com/branch-social.appspot.com/images/chris.png
