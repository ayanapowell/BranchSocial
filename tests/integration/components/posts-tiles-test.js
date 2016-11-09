import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('posts-tiles', 'Integration | Component | posts tiles', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{posts-tiles}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#posts-tiles}}
      template block text
    {{/posts-tiles}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
