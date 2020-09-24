const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (collection instanceof Object){
        let arrayOfValues = Object.values(collection)
        for (const index in arrayOfValues){
          callback(arrayOfValues[index])
        }
      }
      else{
        for(let i = 0; i < collection.length; i++){
          callback(collection[i])
        }
      }
      return collection
    },

    map: function(collection, callback) {

    },

    reduce: function(collection, callback, acc) {

    },

    find: function(collection, predicate) {

    },

    filter: function(collection, predicate) {

    },

    size: function(collection) {

    },

    first: function(array, [n]) {

    },

    last: function(array, [n]) {

    },

    compact: function(array) {

    },

    sortBy: function(array, callback) {

    },

    flatten: function(array, [shallow]) {

    },

    uniq: function(array, [isSorted], [callback]) {

    },

    keys: function(object) {

    },

    values: function(object) {

    },

    functions: function(object) {

    },

  }
})()

fi.libraryMethod()
