const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      const keys = Object.keys(collection);

      for(const key of keys){
        cb(collection[key],key,collection);
      }

      return collection;
    },

    map: function(collection, cb) {
      const keys = Object.keys(collection);
      const collectionCopy = [];

      for(const key of keys){
        collectionCopy.push(cb(collection[key],key,collection));
      }

      return collectionCopy;


    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
