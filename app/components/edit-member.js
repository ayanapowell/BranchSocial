import Ember from 'ember';

export default Ember.Component.extend({
  updateButtonClicked: false,
  actions: {
    updateMember(){
      this.set('updateButtonClicked', true);
    },
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
      this.set('updateButtonClicked', false);
    },
    destroyMember(member){
      this.sendAction('destroyMember', member);
    }
  }
});
