import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('group-post-tile', 'Integration | Component | group post tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{group-post-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#group-post-tile}}
      template block text
    {{/group-post-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
