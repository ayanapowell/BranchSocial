import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    signUp(){
      var params = {
        firstName: this.get('newFirstName'),
        lastName: this.get('newLastName'),
        screenName: $("#newScreenName").val(),
        city: this.get('newCity'),
        state: this.get('newState'),
        zipCode: this.get('newZipCode'),
        avatar: $("newAvatar").val(),
        id: this.get('session').get('currentUser').uid,
      };
      if(params['firstName'] && params['lastName'] && params['screenName'] && params['city'] && params['state'] && params['zipCode']){
            $("input").val("");

        this.sendAction('signUp', params);
      }
    }
  }
});
