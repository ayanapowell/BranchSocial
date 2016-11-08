import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addFriend(listMember, member){
      this.sendAction('addFriend', listMember, member);
    },
    removeFriend(listMember, member){
      this.sendAction('removeFriend', listMember, member);
    }
  }
});
