const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      if (typeof(collection) === 'object') {
        for (let i = 0; i < Object.values(collection).length; i++) {
          cb(Object.values(collection)[i]);
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          cb(collection[i]);
        }
      }
      return collection;
    },

    map: function(collection, cb) {
      const result = [];

      if (typeof(collection) === 'object') {
        for (let i = 0; i < Object.values(collection).length; i++) {
          result.push(cb(Object.values(collection)[i]));
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          result.push(cb(collection[i]));
        }
      }
      return result;
    },

    reduce: function(collection, cb, initial) {
      if (!initial) {
        initial = collection[0];
        collection = collection.slice(1);
      }

      for (const value of collection) {
        initial = cb(initial, value, collection);
      }

      return initial;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
