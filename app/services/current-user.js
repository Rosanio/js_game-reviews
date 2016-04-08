import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: undefined,
  signInCurrentUser(user) {
    this.set('currentUser', user);
  }
});
