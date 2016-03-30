import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if(confirm('Yo, you sure you want to delete this?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
