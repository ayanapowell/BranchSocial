import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  screenName: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  zipCode: DS.attr(),
  avatar: DS.attr(),
  email: DS.attr(),
  groups: DS.hasMany('group', { async: true }),
  friends: DS.hasMany('member', {async:true}),
  posts: DS.hasMany('post', {async:true}),
  requests: DS.hasMany('request', {async:true}),
  comments: DS.hasMany('comment', {async:true}),
  // photos: DS.attr()

});
