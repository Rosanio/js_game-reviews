import Ember from 'ember';

export default Ember.Component.extend({
  favoriteGames: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  actions: {
    changePassword(user, params) {
      console.log(params);
      this.sendAction('changePassword', user, params);
    }
  }
});
