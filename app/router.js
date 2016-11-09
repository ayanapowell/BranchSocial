import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('members', {path: '/dashboard'});
  this.route('member-profile', {path: '/member-profile/:member_id'});
  this.route('group', {path: '/group/:group_id'});
  this.route('friends');
});

export default Router;
