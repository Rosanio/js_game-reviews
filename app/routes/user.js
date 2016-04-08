import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  model(params) {
    return Ember.RSVP.hash({
      currentUser: this.get('currentUser'),
      user: this.store.findRecord('user', params.user_id)
    });
  }
});
