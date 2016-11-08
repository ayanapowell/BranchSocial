import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    addNewGroup(member) {
      var params = {
        owner: this.get('session').get('currentUser').uid,
        name: this.get('newGroupName'),
        description: this.get('newGroupDescription')
      };
      this.set('newGroupName', '');
      this.set('newGroupDescription', '');
      this.sendAction('addNewGroup', params, member);
    }
  }
});
