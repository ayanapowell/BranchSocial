import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendFriendRequest(listMember, member){
      this.sendAction('sendFriendRequest', listMember, member);
    },
    removeFriend(listMember, member){
      this.sendAction('removeFriend', listMember, member);
    }
  }
});
