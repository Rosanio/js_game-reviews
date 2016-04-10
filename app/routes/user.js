import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  model(params) {
    return Ember.RSVP.hash({
      currentUser: this.get('currentUser'),
      user: this.store.findRecord('user', params.user_id),
      reviews: this.store.findAll('review'),
      users: this.store.findAll('user')
    });
  },
  actions: {
    addNewGame(params) {
      var newGame = this.store.createRecord('game', params);
      newGame.save();
      console.log(this.currentModel.currentUser.currentUser.get('id'));
      this.transitionTo('user', this.currentModel.currentUser.currentUser.get('id'));
    },
    addAdmin(params) {
      var newAdmin = this.store.createRecord('user', params);
      newAdmin.save();
      this.transitionTo('user', this.currentModel.currentUser.currentUser.get('id'));
    },
    deleteUser(user) {
      user.destroyRecord();
      this.transitionTo('user', this.currentModel.currentUser.currentUser.id);
    }
  }
});
