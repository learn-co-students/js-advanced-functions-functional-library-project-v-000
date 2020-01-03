const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

      if (Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i]);
        }
      } else {
        let object = Object.values(collection);
        for (let i = 0; i < object.length; i++) {
          callback(object[i]);
        }
      }
      return collection;
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
