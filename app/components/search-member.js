import Ember from 'ember';

export default Ember.Component.extend({
  search: Ember.inject.service(),
  actions: {
    search() {
      var params = {
        search: this.get('search')
      };
      this.get('search').searchMember(params['search']);
    }
  }
});
