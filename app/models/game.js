import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  genre: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
});
