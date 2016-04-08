import Ember from 'ember';

export default Ember.Component.extend({
  showingNewGmeForm: false,
  actions: {
    showNewGameForm() {
      this.set('showingNewGameForm', true);
    },
    addNewGame() {
      var params = {
        name: this.get('name'),
        genre: this.get('genre'),
        image: this.get('image'),
        description: this.get('description')
      };
      this.set('showingNewGameForm', false);
      this.sendAction('addNewGame', params);
    }
  }
});
