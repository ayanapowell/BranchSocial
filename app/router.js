import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('members');
  this.route('chatroom', {path: '/chatroom/:chatroom_id'});
  this.route('member-profile', {path: '/member-profile/:member_id'});
});

export default Router;
