import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('members');
  this.route('group', {path: '/group/:group_id'});
});

export default Router;
