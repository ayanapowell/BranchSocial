import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  members: DS.hasMany('member', { async: true }),
  messages: DS.hasMany('message', { async: true })
});
