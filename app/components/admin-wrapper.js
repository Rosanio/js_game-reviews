import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addNewGame(params) {
      this.sendAction('addNewGame', params);
    }
  }
});
