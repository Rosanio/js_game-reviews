import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  showingReviewForm: false,
  actions: {
    showReviewForm() {
      this.set('showingReviewForm', true);
    },
    newReview(game) {
      var date = new Date();
      var orderDate = -date.getTime();
      var params = {
        review: this.get('review'),
        details: this.get('details'),
        score: this.get('score'),
        date: date,
        orderDate: orderDate,
        author: this.get('currentUser').currentUser,
        game: game
      };
      this.set('showingReviewForm', false);
      this.sendAction('newReview', params);
    }
  }
});
