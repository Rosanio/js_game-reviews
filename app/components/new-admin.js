import Ember from 'ember';

export default Ember.Component.extend({
  showingAdminForm: false,
  actions: {
    showAdminForm() {
      this.set('showingAdminForm', true);
    },
    addAdmin() {
      var params = {
        username: this.get('username'),
        password: this.get('password'),
        permissions: 'admin'
      };
      this.set('showingAdminForm', false);
      this.sendAction('addAdmin', params);
    }
  }
});
