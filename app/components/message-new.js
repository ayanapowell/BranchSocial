import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    sendMessage(){
      if (this.get('messageText') !== '' && this.get('messageText') !== undefined){
        var params = {
          messageText: this.get('messageText'),
          memberName: this.get('member').get('firstName'),
          date: moment(),
          chatroomId: this.get('chatroom').get('id')
        };
        this.sendAction('sendMessage', params);
        $('#messageNew').trigger('reset');
      }
    }
  }

});
