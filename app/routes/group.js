import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model(params){
    return Ember.RSVP.hash({
      group: this.store.findRecord('group', params.group_id),
      member: this.store.findRecord('member', this.get('session').get('currentUser').uid)
    })
  },

  actions: {
    sendMessage(params){
      var newMessage = this.store.createRecord('message', params);
      var group = params.group;
      group.get('messages').addObject(newMessage);
      newMessage.save().then(function(){
        return group.save();
      });
    }
  }
});
