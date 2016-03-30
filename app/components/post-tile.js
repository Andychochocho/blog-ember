import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post, params) {
      this.sendAction('update', post, params);
    },
    delete(post) {
      if(confirm('Yo, you sure you want to delete this?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
