const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
     Object.values(collection).forEach(e => callback(e))
     return collection
   },

    map: function(collection, callback) {
      return Object.values(collection).map(callback);
    },

    reduce: function(collection, callback, accumulator) {
      if (accumulator === undefined) {
        return collection.reduce(callback)
      }

      else {
        return collection.reduce(callback, accumulator)
      }
    },

    functions: function() {

    },

    find: function(collection, item) {
      return collection.find(item)
    },

    filter: function(collection, item) {
      return collection.filter(item)
    },
    size: function(collection) {
      return Object.values(collection).length
    },
    first: function(collection, n) {
      if (n === undefined) {
        return collection[0]
      }

      else {
        return collection.slice(0, n)
      }
    },

    last: function(collection, n) {
      if (n === undefined) {
        return collection[collection.length - 1]
      }

      else {
        return collection.slice(collection.length - n, collection.length)
      }
    },

    compact: function(collection) {
      return collection.filter(x => x)
    },

    sortBy: function(collection, callback) {
      const newCollection = [...collection]
      return newCollection.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(collection, shallow) {
      if (shallow === true) {
        return collection.slice().flat()
      }

      else {
        const depth = collection.length
        return collection.slice().flat(depth)
      }
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      }

      else if (!iteratee) {
        return Array.from(new Set(collection))
      }

      else {
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

    keys: function(obj) {
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
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
