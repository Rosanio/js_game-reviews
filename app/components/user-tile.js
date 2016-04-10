import Ember from 'ember';

export default Ember.Component.extend({
  showingDetails: false,
  actions: {
    showDetails() {
      this.toggleProperty('showingDetails');
    },
    deleteUser(user) {
      if(confirm('Are you sure?')) {
        this.sendAction('deleteUser', user);
      }
    }
  }
});
