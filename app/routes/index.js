import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  model() {
    return Ember.RSVP.hash({
      currentUser: this.get('currentUser'),
    });
  },
  
});