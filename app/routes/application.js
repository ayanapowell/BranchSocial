import Ember from 'ember';
export default Ember.Route.extend({
  beforeModel: function() {
    //TO UPDATE FOR FUTURE USE 
    // if (!this.get('session').get('isAuthenticated')) {
    //   this.transitionTo('index');
    // }
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signOut: function() {
      this.get('session').close();
      this.transitionTo('index');
    }
  }
});
