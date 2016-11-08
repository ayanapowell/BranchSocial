import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  searchedTerm: 'dog',
  foundMember: null,

  actions: {
    searchName(){
      var _this = this;
      this.set('searchedTerm', this.get('searchTerm'));
      this.get('store').query('member', {
        orderBy: 'screenName',
        equalTo: this.get('searchedTerm')
      }).then(function(response){
        _this.set('foundMember', response.get('firstObject'));
      });
    },
    addToGroup(foundMember, group) {
      this.sendAction('addMemberToGroup', foundMember, group);
    }
  }
});
