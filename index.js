// const { spy } = require("chai")

const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by rceading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let arrayCopy = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      // Check if collection is an Array 
     
      // Iterates over a collection of elements
        for (let i = 0; i < arrayCopy.length; i++) {
        //passing each element in turn to a callback function
      
          callback(arrayCopy[i]) 
        } 
      return collection
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


