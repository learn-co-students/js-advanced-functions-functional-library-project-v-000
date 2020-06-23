// const { spy } = require("chai")

const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by rceading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
                      // Check if collection is an Array                  // collection is an Objecct
      let arrayCopy = (collection instanceof Array) ? collection.slice() : Object.values(collection) 

        // Iterates over a collection of elements
        for (let i = 0; i < arrayCopy.length; i++) {
          //passing each element in turn to a callback function
          callback(arrayCopy[i]) 
        } 
      console.log("collection", collection)
      // collection [ 1, 2, 3, 4 ]
      // collection { one: 1, two: 2, three: 3, four: 4 }
      // returns the original collection
      return collection
    },

    map: function(collection, callback) {
      // Produces a new array of values by mapping each value in collection through a transformation function (callback)
      let newArray = !(collection instanceof Array) ? Object.values(collection) :  collection.slice()
      // let newArray = (collection instanceof Array) ? collection.slice() : Object.values(collection) // Alternative
      let newArrayResult = []
      // iterate over collection of elements
      for (let i = 0; i < newArray.length; i++) {
        newArrayResult.push(callback(newArray[i]))    
      }
      // console.log("newArray", newArray)
      // newArray [ 1, 2, 3, 4 ]
      // console.log("newArrayResult", newArrayResult)
      // newArrayResult [ 3, 6, 9, 12 ]
      return newArrayResult
    },

    reduce: function(collection, callback, accumulator) {
      // set newArray
      let newArray = collection.slice()
        // if there is no value in accumulator
        if (!accumulator) {
          //  start with index position 0
          accumulator = collection[0]
          // Set newArray to index position 1 to avoid double counting the index position 0
          newArray = collection.slice(1)
        }
      // for loop iterate over length of newArray
      for (let i = 0; i < newArray.length; i++) {
        // Set accumulator to callback of accumulator, currentValue, initialValue
        accumulator = callback(accumulator, newArray[i], newArray)
      }
      return accumulator
    },

    find: function(collection, predicate) {
      // set new array
      let newArray = (collection instanceof Array) ? collection.slice() : Object.values(collection) 
      // console.log("newArray", newArray)
      // newArray [
      //   -1, 4, 0, 1, 3,
      //    2, 3, 4, 5, 6
      // ]      
      // console.log("collection", collection)
      // collection [
      //   -1, 4, 0, 1, 3,
      //    2, 3, 4, 5, 6
      // ]

      // iterate over the newArray
      for (let i = 0; i < newArray.length; i++) {

        // console.log("predicate(newArray[i])", predicate(newArray[i]))
        // predicate(newArray[i]) false
        // predicate(newArray[i]) true
        // predicate(newArray[i]) false
        // predicate(newArray[i]) false
        // predicate(newArray[i]) false
        // predicate(newArray[i]) false
        // predicate(newArray[i]) true
        // predicate(newArray[i]) false
        // predicate(newArray[i]) true
        //       ✓ returns the value if found
        // predicate(newArray[i]) false
        // predicate(newArray[i]) false
        // predicate(newArray[i]) true

        if (predicate(newArray[i])) {
          return (newArray[i])
        }
      }
        return undefined
    },

    filter: function(collection, predicate) {
      // set newArray to collection if an array use .slice on collection : else use Object.values
      let newArray = (collection instanceof Array) ? collection.slice() : Object.values(collection)

       // set save in variable
      let truthResults = []

      // console.log("newArray", newArray)
      // newArray [
      //   6, 11, 5, 12, 17,
      // 100,  9, 1, -8
      // ]

       // iterate over the newArray
      for (let i = 0; i < newArray.length; i++) {            
        if (predicate(newArray[i])) {
          // saves all elements that return truthy 
          truthResults.push(newArray[i])
        }
      }
      return truthResults
    },



    functions: function() {

    },


  }
})()

fi.libraryMethod()


