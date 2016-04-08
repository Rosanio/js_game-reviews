import Ember from 'ember';

export default Ember.Component.extend({
  favoriteGames: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  favorited: false,
  averageScore: Ember.computed('reviews', 'game.reviews', function() {
    var sumScore = 0;
    var reviewsLength = 0;
    this.get('game').get('reviews').forEach(function(review) {
      sumScore += parseInt(review.get('score'));
      reviewsLength++;
    });
    return (Math.round(sumScore/reviewsLength*100)/100).toFixed(2);
  }),
  actions: {
    newReview(params) {
      this.sendAction('newReview', params);
    },
    addFavorite(game) {
      this.get('favoriteGames').addFavorite(game);
      this.set('favorited', true);
    }
  }
});
