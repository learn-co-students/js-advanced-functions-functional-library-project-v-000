const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callBackValue) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
        for (let i = 0; i < newCollection.length; i++)
        callBackValue(newCollection[i])
        return collection
  },
    // iterate over a collection of elements, passing each element in turn to a callback function.
    // Each invocation of callback is called with (element, index, collection)
    // if colleciton is a JS object callback, arguement will be (value, key, colleciton)
    // Return the original collection for chaining

    map: function(collection, iteratee) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newArr = []

      for (let idx = 0; idx < collection.length; idx++)
        newArr.push(iteratee(collection[idx]))
      return newArr
    },
    // produces a new array of values by mapping each value to collection through a transformation function(callback).
    // The callback is passed 3 arguments; the vlaue, then the index of the iteration, and finally a referenece to the entire collection
    // Return a new collection for chaining without modifying the original

    reduce: function(c = [], callback=()=>{}, acc) {
      let collection = c.slice(0)
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      for (let i = 0; i < collection.length; i++){
      acc = callback(acc, collection[i], collection)
    }
    return acc;
  },

  find: function(collection, predicate) {
    /* collection.find(predicate)
      for(let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) return collection[i]
        return undefined  */

  if (!(collection instanceof Array))
      collection = Object.values(collection)

      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) return collection[i]

      return undefined
  },


  filter: function(collection, predicate) {
    if (!(collection instanceof Array))
      collection = Object.values(collection)

        const newArray = []

    for(let i = 0; i < collection.length; i++)
    if (predicate(collection[i])) newArray.push(collection[i])
    return newArray

  },

  // return the number of values in the collection
  size: function(collection) {
    // const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)  //example
   return (collection instanceof Array) ? collection.length : Object.keys(collection).length
  },

  first: function(collection, stop = false) {
// return the first element of an array

  return (stop) ? collection.slice(0, stop) : collection[0]
  },

  last: function(collection, start = false ){
    // return the lflatten: function(collection, shallow, newArr=[]) { // Flattens a nested array (the nesting can be any dept)
    return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
  },

  compact: function(collection) {
    // return a copy of the array with all falsy values removed
       return collection.filter(Boolean);  // expects a function that return a Boolean value which takes a single argument and return true for truthy value.
  },

  sortBy: function(collection, callback) {
    const newCollection = [... collection]
    // return a sorted copy of array, ranked in ascending order by the results of running each value through callback
    return newCollection.sort(function(a, b) {
      return callback(a) - callback(b)
  })
  },

  flatten: function(collection, shallow, newArr=[]) {
    if (!Array.isArray(collection))
    return newArr.push(collection)
    if (shallow) {
      for (let val of collection)
        Array.isArray(val) ? this.flatten(newArr, true) : newArr.push(val)
    } else {
      for (let val of collection) {
        this.flatten(val, false, newArr)
      }
    }
    return newArr
  },

  uniq: function(collection, sorted=false, iteratee=false) {
    if (sorted) {
      return fi.uniqSorted(collection, iteratee)
    } else if (!iteratee) {
      return Array.from(new Set(collection))
    } else {
      const modifiedVals = new Set()
      const uniqVals = new Set()
      for (let val of collection) {
        const moddedVal = iteratee(val)
        if (!modifiedVals.has(moddedVal)) {
          modifiedVals.add(moddedVal)
          uniqVals.add(val)
        }
      }
      return Array.from(uniqVals)
    }
  },

  keys: function(obj){
    const keys = []
    for (let key in obj){
      keys.push(key)
    }
    return keys
  },

  values: function(obj){
     // Using for loop
     const values = []
     for (let key in obj){
       values.push(obj[key])
     }
     return values
    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    },

  }
})()

fi.libraryMethod()