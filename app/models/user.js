import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  password: DS.attr(),
  permissions: DS.attr(),
  favoriteGames: DS.hasMany('game', { async: true })
});
