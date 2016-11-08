import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      member: this.store.findRecord('member', this.get('session').get('currentUser').uid),
      members: this.store.findAll('member'),
    }).catch(function(err) {
      console.log(err);
    })
  },
  actions:{
    addFriend(listMember, member){
      listMember.get('friends').addObject(member).then(function(){
        member.get('friends').addObject(listMember).then(function(){
          listMember.save();
          member.save();
        });
      });
    },
    removeFriend(listMember, member){
      listMember.get('friends').removeObject(member).then(function(){
        member.get('friends').removeObject(listMember).then(function(){
          listMember.save();
          member.save();
        });
      });
    },

  } //end action

});
