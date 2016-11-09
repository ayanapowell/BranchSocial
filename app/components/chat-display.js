import Ember from 'ember';

export default Ember.Component.extend({
  isScrolledToBottom: true,
  willUpdate() {
    this._super(...arguments);

    let box = this.$('#chatDisplay')[0];
    let isScrolledToBottom = box.scrollTop + box.clientHeight === box.scrollHeight;

    this.set('isScrolledToBottom', isScrolledToBottom);
  },

  didRender() {
    this._super(...arguments);

    if (this.get('isScrolledToBottom')) {
      this.$('#chatDisplay')[0].scrollTop = this.$('#chatDisplay')[0].scrollHeight;
    }
  }
});
