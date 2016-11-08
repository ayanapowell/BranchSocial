import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    registerMember(){
      alert("1");
      console.log('my email: ' + this.get('session').get('currentUser').email);
      var params = {
        firstName: this.get('newFirstName'),
        lastName: this.get('newLastName'),
        screenName: this.get('newScreenName'),
        city: this.get('newCity'),
        state: this.get('newState'),
        zipCode: this.get('newZipCode'),
        avatar: $("#newAvatar").val(),
        email: this.get('session').get('currentUser').email,
        id: this.get('session').get('currentUser').uid
      };
      console.log(params);
      if(params['firstName'] && params['lastName'] && params['screenName'] && params['city'] && params['state'] && params['zipCode']){
        alert("2");
            $("input").val("");
        this.sendAction('registerMember', params);
      }
    }
  }
});
