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
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.currentModel.currentUser.signInCurrentUser(newUser);
      this.transitionTo('index');
    },
    signIn(params) {
      var foundUser = false;
      var route = this;
      route.currentModel.allUsers.forEach(function(user) {
        console.log(user);
        if(params.username === user.get('username')) {
          if(params.password === user.get('password')) {
            route.currentModel.currentUser.signInCurrentUser(user);
            route.transitionTo('index');
            foundUser = true;
          } else {
            alert('Incorrect Password');
            foundUser = true;
          }
        }
      });
      if(!foundUser) {
        alert('No user by that username was found');
      }
    }
  }
});
