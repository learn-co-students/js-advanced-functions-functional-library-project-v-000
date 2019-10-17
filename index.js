const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const i in collection) {
        callback(collection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      const newCollection = [];
      for (const i in collection) {
        newCollection.push(callback(collection[i]));
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      for (const i in collection) {
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
