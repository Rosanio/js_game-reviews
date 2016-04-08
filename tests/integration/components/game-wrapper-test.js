import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('game-wrapper', 'Integration | Component | game wrapper', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{game-wrapper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#game-wrapper}}
      template block text
    {{/game-wrapper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
