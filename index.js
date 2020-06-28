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

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length

      // ALTERNATIVE
      // let newArray = (collection instanceof Array) ? collection.length : Object.keys(collection).length
      //     return newArray
    },

    // first: function(array, [n]) {
    // Change [n] to stop variable set to false/no value
    first: function(array, stop = false) {
      // Conditional for stop
      if (stop) {
          // slice(begin, end)
          return array.slice(0, stop)
      } else {
          // Array within Array
          return array[0]
          // return array.slice(0) Does NOT work
          // return array.slice() Does NOT work
      }
    },

    // last: function(array, [n])
    last: function(array, stop = false) {
      if (stop) {
        // returns the last n elements of the collection when the second optional argument (n) is provided
        // return array.slice(Math.max(array.length - n, 0));  
        return array.slice(Math.max(array.length -stop, 0))
      } else {
          // returns the last element of the collection
          return array[array.length - 1];
      }
    },

    compact: function(array) {
      // returns a copy of the **array** with all falsy values removed. 
        // In JavaScript, _false_, _null_, _0_, _""_, _undefined_ and _NaN_ are all falsy.
      // does not modify the original array
      let filterArray = array.filter(Boolean);
        return filterArray
    },

    sortBy: function(array, callback) {
      // does not modify the original arrays
      let newArray = [...array]
        return newArray.sort(function(a, b) {
          // correctly sorts arrays of integers and arrays of strings
          // correctly sorts arrays of integers with non-standard sort
          return callback(a) - callback(b)
        })
    },

    // flatten: function(array, [shallow]) {
    flatten: function(array, shallow, newArray = []) { 
            // console.log("array", array)   
      // console.log("shallow", shallow)
      // array [ 1, [ 2, 3 ], [ [ 4, 5 ], 6, [ 7, [Array] ] ] ]
      // shallow undefined
      // 1) correctly flattens a ludicrously nested array
      // array [ 1, [ 2, 3 ], [ [ 4, 5 ], 6, [ 7, [Array] ] ] ]
      // console.log("newArray", newArray)
      // newArray [ [ 1, [ 2, 3 ], [ [Array], 6, [Array] ] ] ]
      // newArray [ [ 1, [ 2, 3 ], [ [Array], 6, [Array] ] ] ]

      if (shallow === true) {
        for (let i = 0; i < array.length; i++) {  
        // console.log("I am on the first level")
          if (Array.isArray(array[i])) {
            for (let j = 0; j < array[i].length; j++) { 
            // console.log("I am on the second level")
              newArray.push(array[i][j])
            }
          } else {
            newArray.push(array[i])
          }
        }
      } else {
        for (let i = 0; i < array.length; i++) {  
        // console.log("I am on the first level")
          if (Array.isArray(array[i])) {
            this.flatten(array[i], false, newArray)
          } else {
            newArray.push(array[i])
          }
        }
      }
    return newArray
    },

    // uniq: function(array, [isSorted], [callback], newArray = []) { 
    uniq: function(array, isSorted, callback = false, newArray = []) { 
3


      // Set.array.forEach((item, index) => { if (array.indexOf(item) == index) newArray.push(item) })
      // return newArray

      // console.log("array", array)
      // array [
      //   1, 1, 2, 3, 2,
      //   4, 5, 6, 1
      // ]
      // console.log("[isSorted]", [isSorted])
      // [isSorted] [ undefined ]
      // console.log("[callback]", [callback])
      // [callback] [ undefined ]

      // array.sort(a, b);
      //   return a - b
        // ReferenceError: a is not defined

        // if (array.isSorted) {
        //   return array

        let newSet = new Set()

        if (callback) {
          for (let i = 0; i < array.length; i++) {

            //adding to the set after callling th callback function[i]
            //newSet.add(callback(array[i]))
            newSet.add(callback(array[i]))
            // console.log("newSet", newSet)
            // newSet Set(6) { 1, 2, 3, 4, 6, 9 }
            // newSet Set(6) { 1, 2, 3, 4, 6, 9 }
            // newSet Set(6) { 1, 2, 3, 4, 6, 9 }
            // newSet Set(7) { 1, 2, 3, 4, 6, 9, 0 }
            // newSet Set(7) { 1, 2, 3, 4, 6, 9, 0 }
            // newSet Set(7) { 1, 2, 3, 4, 6, 9, 0 }
            // newSet Set(7) { 1, 2, 3, 4, 6, 9, 0 }
            
          }
            // turn set into array
            console.log("[...newSet]", [...newSet])
            // [...newSet] [
            //   1, 2, 3, 4,
            //   6, 9, 0
            // ]
         
            newArray = [...newSet].flatten
            return newArray
            // console.log("newArray", newArray)
            // [
            //   1, 2, 3, 4,
            //   6, 9, 0
            // ]
        } else {
          
          // [
          //   1, 2, 3, 4,
          //   6, 9, 0
          // ]

           newSet.add(array)
           console.log("[...newSet]2", [...newSet])
           console.log("faltten", this.flatten([...newSet], true))
           return [...newSet]
        }

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()


