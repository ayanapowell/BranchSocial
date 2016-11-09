import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    registerMember(){
      var params = {
        firstName: this.get('newFirstName'),
        lastName: this.get('newLastName'),
        screenName: this.get('newScreenName'),
        city: this.get('newCity'),
        state: this.get('newState'),
        zipCode: this.get('newZipCode'),
        avatar: this.get('session').get('currentUser').photoURL,
        email: this.get('session').get('currentUser').email,
        id: this.get('session').get('currentUser').uid
      };
      if (params.avatar === null) {
        params.avatar = '';
      }
      if(params['firstName'] && params['lastName'] && params['screenName'] && params['city'] && params['state'] && params['zipCode']){
      $("input").val("");
        this.sendAction('registerMember', params);
      }
    }
  }
});
