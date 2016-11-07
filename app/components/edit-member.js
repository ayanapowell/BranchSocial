import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editInfo(member){
      var params = {
        firstName: this.get('editFirstName'),
        lastName: this.get('editLastName'),
        screenName: this.get('editScreenName'),
        city: this.get('editCity'),
        state: this.get('editState'),
        zipCode: this.get('editZipCode'),
        avatar: this.get('editAvatar'),
      };
      this.sendAction('editInfo',member, params);
    }
  }
});
