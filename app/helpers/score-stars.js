import Ember from 'ember';

export function scoreStars(params) {
  var score = params[0];
  if(score > 4) {
    return Ember.String.htmlSafe('&bigstar; &bigstar; &bigstar; &bigstar; &bigstar;');
  } else if(score === 4) {
    return Ember.String.htmlSafe('&bigstar; &bigstar; &bigstar; &bigstar;');
  } else if(score >= 3) {
    return Ember.String.htmlSafe('&bigstar; &bigstar; &bigstar;');
  } else if(score >= 2) {
    return Ember.String.htmlSafe('&bigstar; &bigstar;');
  } else if(score >= 1) {
    return Ember.String.htmlSafe('&bigstar;');
  }
}

export default Ember.Helper.helper(scoreStars);
