import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model(params){
    return Ember.RSVP.hash({
      chatroom: this.store.findRecord('chatroom', params.chatroom_id),
      member: this.store.findRecord('member', this.get('session').get('currentUser').uid)
    })
  },

  actions: {
    sendMessage(params){
      var newMessage = this.store.createRecord('message', params);
      var chatroom = params.chatroom;
      chatroom.get('messages').addObject(newMessage);
      newMessage.save().then(function(){
        return chatroom.save();
      });
    }
  }
});
