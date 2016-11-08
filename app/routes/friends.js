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
    sendFriendRequest(listMember, member){
      var params = {
        name: member.get('firstName')+ " "+ member.get('lastName'),
        avatar: member.get('avatar'),
        sentById: member.get('id'),
      };
      var newRequest = this.store.createRecord('request', params);
      listMember.get('requests').addObject(newRequest).then(function(){
        listMember.save();
        newRequest.save();
      });
    },
    addFriend(member, requester_id){
      this.store.findRecord('member',requester_id).then(function(requester){
        requester.get('friends').addObject(member).then(function(){
          member.get('friends').addObject(requester).then(function(){
            requester.save();
              member.save();
          });
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
