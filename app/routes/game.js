import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  model(params) {
    return Ember.RSVP.hash({
      currentUser: this.get('currentUser'),
      game: this.store.findRecord('game', params.game_id),
      reviews: this.store.findAll('review')
    });
  },
  actions: {
    newReview(params) {
      console.log(params);
      if(this.currentModel.currentUser.currentUser) {
        var newReview = this.store.createRecord('review', params);
        var game = params.game;
        var user = params.author;
        game.get('reviews').addObject(newReview);
        user.get('reviews').addObject(newReview);
        newReview.save().then(function() {
          return game.save();
        }).then(function() {
          return user.save();
        });
      }
    }
  }
});
