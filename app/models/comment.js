import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  date: DS.attr(),
  member: DS.belongsTo('member',{async:true}),
  post: DS.belongsTo('post', {async:true}),
});
