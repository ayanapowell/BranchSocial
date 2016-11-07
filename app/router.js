import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('members');
  this.route('chatroom', {path: '/chatroom/:chatroom_id'});
});

export default Router;
