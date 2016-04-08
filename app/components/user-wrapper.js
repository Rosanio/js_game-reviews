import Ember from 'ember';

export default Ember.Component.extend({
  favoriteGames: Ember.inject.service(),
  currentUser: Ember.inject.service()
});
