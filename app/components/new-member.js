import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    signUp(){

      var params = {
        firstName: this.get('newFirstName'),
        lastName: this.get('newLastName'),
        screenName: this.get('newScreenName'),
        email: this.get('newEmail'),
        password: this.get('newPassword'),
        city: this.get('newCity'),
        state: this.get('newState'),
        zipCode: this.get('newZipCode'),
        avatar: this.get('newAvatar')
      };
      if(params['firstName'] && params['lastName'] && params['screenName'] && params['email'] && params['password'] && params['city'] && params['state'] && params['zipCode']){
            $("input").val("");

        this.sendAction('signUp', params);
      }
    }
  }
});
