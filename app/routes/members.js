import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model(){
       return Ember.RSVP.hash({
           member: this.store.findRecord('member', this.get('session').get('currentUser').uid),
        
       })
     },
  actions: {
    signUp(params){
      var newMember = this.store.createRecord('member', params);
      newMember.save();
      alert("member saved?");
      this.transitionTo('members');
    }
  }


});
