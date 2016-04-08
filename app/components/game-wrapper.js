import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newReview(params) {
      this.sendAction('newReview', params);
    }
  }
});
