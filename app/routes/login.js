import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  model() {
    return Ember.RSVP.hash({
      allUsers: this.store.findAll('user'),
      currentUser: this.get('currentUser')
    });
  },
  actions: {
    signUp(params) {
      console.log(params);
      var newUser = this.store.createRecord('user', params);
      console.log(newUser);
      newUser.save();
      this.currentModel.currentUser.signInCurrentUser(newUser);
      this.transitionTo('index');
    }
  }
});
