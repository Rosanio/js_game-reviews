import Ember from 'ember';

export default Ember.Component.extend({
  signingUp: false,
  actions: {
    signingUp() {
      this.set('signingUp', true);
    },
    signUp() {
      var params = {
        username: this.get('newUsername'),
        password: this.get('newPassword')
      };
      this.set('signingUp', false);
      this.sendAction('signUp', params);
    }
  }
});
