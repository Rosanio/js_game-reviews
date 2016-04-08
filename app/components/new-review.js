import Ember from 'ember';
import moment from 'moment';

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
      var time = date.toString().substring(16, 24);
      date = date.toString().substring(4, 15);
      var dateAndTime = date + ' ' + time;
      var momentDateAndTime = moment(dateAndTime).format('MM/DD/YYYY hh:mm:ss a');
      var params = {
        review: this.get('review'),
        details: this.get('details'),
        score: this.get('score'),
        date: momentDateAndTime,
        orderDate: orderDate,
        author: this.get('currentUser').currentUser,
        game: game
      };
      this.set('showingReviewForm', false);
      this.sendAction('newReview', params);
    }
  }
});
