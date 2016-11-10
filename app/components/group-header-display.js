import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    deleteGroup(group) {
      this.sendAction('deleteGroup', group);
    },
    showForm() {
      this.set('showForm', true);
    },
    updateGroup(group) {
      var params = {
        name: this.get('name'),
        description: this.get('description')
      }
      this.sendAction('updateGroup', params, group);
      this.set('showForm', false);
    }
  }
});
