import Route from '@ember/routing/route';

export default Route.extend({
  // queryParams: {
  //   letter: { refreshModel: true }
  // },

  model() {
    return this.store.findAll('library');
    // return this.store.query('library', {
    //   orderBy: 'name'
    // });
  },

  actions: {
    deleteLibrary(library) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        library.destroyRecord();
      }
    }
  }

});