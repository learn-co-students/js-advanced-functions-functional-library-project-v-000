// const { spy } = require("chai")

const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by rceading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      // Check if collection is an Array
      if (collection instanceof Array)  {
      // Iterates over a collection of elements
        for (let i = 0; i < collection.length; i++) {
        //passing each element in turn to a callback function
          callback(collection[i]) 
        } 
        // Check if collection is an Object
      } else { (collection instanceof Object) 
        console.log(Object.values(collection)) // [ 1, 2, 3, 4 ]
          // Iterates over a collection of elements
        for (let i = 0; i < collection.length; i++) {
        //passing each element in turn to a callback function
          callback(collection[i]) 
         }
        // Returns the original collection for chaining.
        // returns the original collection
        return collection
      }
      
    },


    // map: function() {

    // },

    // reduce: function() {

    // },

    // // functions: function() {

    // },


  }
})()

fi.libraryMethod()


