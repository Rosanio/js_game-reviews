import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signUp(params) {
      console.log(params);
      var newUser = this.store.createRecord('user', params);
      console.log(newUser);
      newUser.save();
      this.transitionTo('index');
    }
  }
});
