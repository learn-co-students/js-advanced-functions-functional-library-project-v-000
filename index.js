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

    reduce: function(collection, cb, acc) {
      const values = Object.values(collection);
      let accumulator = !!acc? acc : values.shift();

      for(const val of values){
        accumulator = cb(accumulator, val, values);
      }
      return accumulator;
    },

    find: function(collection, cb) {
      const values = Object.values(collection);

      for(const val of values){
         if (!!cb(val, values)) return val;
      }
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
