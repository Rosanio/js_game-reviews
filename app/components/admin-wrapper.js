import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  actions: {
    addNewGame(params) {
      this.sendAction('addNewGame', params);
    },
    addAdmin(params) {
      this.sendAction('addAdmin', params);
    }
  }
});
