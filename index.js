const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      // const collectionValues = Object.values(collection);
      // This passes the tests, but it contradicts the README.
      // for (const value of collectionValues) {
      //   callback(value);
      // }
      
      const keysOrIndices = Object.keys(collection); // This works for Arrays AND Objects!
      // Though it may be cheating, since it uses a built-in function that I have to implement later.
      
      for (const keyOrIndex of keysOrIndices) {
        callback(collection[keyOrIndex], keyOrIndex, collection);
      }
      
      // let i = 0; // Previous code
      // if (Array.isArray(collection)) {
      //   for (; i < collection.length; i++) {
      //     callback(collection[i], i, collection);
      //   }
      // } else {
      //   // Here, the collection is assumed to be a non-array Object.
      //   const collectionKeys = Object.keys(collection);
      //   for (; i < collectionKeys.length; i++) {
      //     callback(collection[collectionKeys[i]], collectionKeys[i], collection);
      //   }
      // }

      return collection;
    },

    map: function(collection, callback) {
      const keysOrIndices = Object.keys(collection);
      const returnedArray = [];

      for (const keyOrIndex of keysOrIndices) {
        returnedArray.push( callback(collection[keyOrIndex], keyOrIndex, collection) );
      }

      return returnedArray;
    },

    reduce: function(collection, callback, acc) {
      let i;

      if (acc || acc === 0) { // Start the iteration at the first element, if the accumulator has an initial value.
        i = 0; // Oh, right. 0 is falsy in JS.
      } else {
        // Set the accumulator to the first element of the collection,
        // and start the iteration at the second element.
        i = 1;
        acc = collection[0];
      }

      for (; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }

      return acc;
    },

    find: function(collection, predicate) {
      for (const value of collection) {
        if (predicate(value)) { return value; }
      }
      // If it can't find a value that satisfies the predicate, return undefined (default).
    }, // There are MORE functions to write after this...

    functions: function() {

    }
  }
})()

fi.libraryMethod()
