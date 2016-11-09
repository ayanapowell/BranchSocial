import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendFriendRequest(listMember, member){
      this.sendAction("sendFriendRequest",listMember, member);
    },
    addFriend(member, requester_id, request){
      this.sendAction('addFriend', member, requester_id, request);
    },
    removeFriend(listMember, member){
      this.sendAction('removeFriend', listMember, member);
    }
  }
});
