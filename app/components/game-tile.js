import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  showingDetails: false,
  actions: {
    showDetails() {
      this.toggleProperty('showingDetails');
    }
  }
});
