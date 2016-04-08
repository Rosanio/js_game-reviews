import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    signUp(params) {
      this.sendAction('signUp', params);
    },
    signIn() {
      var params = {
        username: this.get('username'),
        password: this.get('password')
      };
      this.sendAction('signIn', params);
    }
  }
});
