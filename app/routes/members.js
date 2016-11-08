import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  model(){
    return Ember.RSVP.hash({
      member: this.store.findRecord('member', this.get('session').get('currentUser').uid),
      members: this.store.findAll('member'),
    }).catch(function(err) {
      console.log(err);
    })
  },
  actions: {
    editInfo(member, params){
      console.log(member.get('firstName'));
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined){
          member.set(key, params[key]);
        }
      });
      member.save();
      this.transitionTo('members');
    },

    destroyMember(member){
      member.destroyRecord();
      this.transitionTo('index');
    },
    savePost(params) {
      console.log(params);
      var newPost = this.store.createRecord('post', params);
      var member = params['member'];
      member.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return member.save();
      });
      this.transitionTo('members');
    },
    search(search) {
      console.log(search);
      console.log(model.members);
      // this.members.forEach(function(member) {
      //   if(member.firstName === search) {
      //     alert("We found a match!");
      //   }
      // });
    }
  }
});
