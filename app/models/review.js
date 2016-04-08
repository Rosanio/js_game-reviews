import DS from 'ember-data';

export default DS.Model.extend({
  review: DS.attr(),
  details: DS.attr(),
  score: DS.attr(),
  date: DS.attr(),
  orderDate: DS.attr(),
  author: DS.belongsTo('user', { async: true }),
  game: DS.belongsTo('game', { async: true })
});
