import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('user', { path: '/user/:user_id'});
  this.route('game', { path: '/game/:game_id'});
});

export default Router;
