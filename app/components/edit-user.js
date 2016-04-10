import Ember from 'ember';

export default Ember.Component.extend({
  showingEditForm: false,
  passwordChanged: false,
  actions: {
    showEditForm() {
      this.set('showingEditForm', true);
    },
    changePassword(user) {
      var params = {
        password: this.get('password')
      };
      console.log(params);
      this.set('showingEditForm', false);
      this.set('passwordChanged', true);
      this.sendAction('changePassword', user, params);
    }
  }
});
