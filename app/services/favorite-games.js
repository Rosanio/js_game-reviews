import Ember from 'ember';

export default Ember.Service.extend({
  favoriteGames: [],
  addFavorite(game) {
    if(this.get('favoriteGames').contains(game)) {
      alert('You already favorited this game');
    } else {
      this.get('favoriteGames').pushObject(game);
    }
  }
});
