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
        // RUN A CHECK TO SEE IF THIS USER IS IN THE DATABASE - IF SO GO TO MEMBERS ROUTE, ELSE STAY HERE TO FINISH REGISTRATION
        // if (_this.get('store').hasRecordForId('member', this.get('session').get('currentUser').uid)) {
        //   _this.transitionTo('members');
        // } else {
        //   console.log('member must complete 2nd registration');
        // }
      });
    },
    signOut: function() {
      this.get('session').close();
      this.transitionTo('index');
    }
  }
});
