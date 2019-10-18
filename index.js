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
      for (let i = 0; i < collection.length; i++) {
        if (acc === undefined) {
          acc = collection[0];
          i++;
        }
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (const i in collection) {
        if (!!predicate(collection[i])){
          return collection[i];
        }
      }
    },

    filter: function(collection, predicate) {
      const newCollection = [];
      for (const i in collection) {
        if (!!predicate(collection[i])) {
          newCollection.push(collection[i]);
        }
      }
      return newCollection;
    },

    size: function(collection) {
      let counter = 0
      for (const i in collection) {
        counter++;
      }
      return counter;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
