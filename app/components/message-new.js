import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    sendMessage(){
      var _this = this;
      if (this.get('messageText') !== '' && this.get('messageText') !== undefined){
        var isMember = false;
        this.get('group').get('members').forEach(function(member) {
          if (member.get('id') === _this.get('session').get('currentUser').uid) {
            isMember = true;
          }
        });
        if (isMember) {
          var params = {
            messageText: this.get('messageText'),
            memberName: this.get('member').get('firstName'),
            date: moment(),
            group: this.get('group')
          };
          this.sendAction('sendMessage', params);
          $('#messageNew').trigger('reset');
        }
      }
    }
  }

});
