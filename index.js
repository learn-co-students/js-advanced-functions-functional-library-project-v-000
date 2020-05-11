const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = (collection.isArray ? collection.splice() : Object.values(collection))
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = (collection.isArray ? collection.splice() : Object.values(collection))
      let newArray = [];
      for(let i = 0; i < newCollection.length; i++){
        newArray.push(callback(newCollection[i]))
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      let memo = (!!acc) ? acc : collection[0]
      let i = (!!acc) ? 0 : 1;
      for (; i < collection.length; i++){
        memo = callback(memo, collection[i]);
      }
      return memo;
    },

    find: function(collection, predicate) {
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

      for (let i = 0; i < collection.length; i++)
        if(predicate(collection[i])) newArray.push(collection[i])
        return newArray
    },

    size: function(collection) {
        return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(collection, stop = false) {
      return (stop) ? collection.slice(0, stop) : collection[0]
    },

    last: function(collection, start = false) {
        return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    compact: function(array) {
        const falsy = new Set([false, null, 0, "", undefined, NaN])
        return array.filter(element => !falsy.has(element))
    },

    sortBy: function(array, callback) {
      const newArray = [...array]
      return newArray.sort(function(a,b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },


    flatten: function(collection, shallow, newArray=[]) {
      if(!Array.isArray(collection)) return newArray.push(collection)

      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArray, val) : newArray.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArray)
        }
      }
      return newArray
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let index = 1; index < collection.length; index++){
        if (sorted[index-1] !== collection[index])
          sorted.push(collection[index])
      }
      return sorted
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
    keys: function(object) {
      const keys = []
      for (let key in object){
        keys.push(key)
      }
      return keys
    },

    values: function(object){
      const values = []
      for (let key in object) {
        values.push(object[key])
      }
      return values
    },

    functions: function(object) {
      const functionsNames = []
      for (let key in object) {
        if (typeof object[key] === "function") {
          functionsNames.push(key)
        }
      }
      return functionsNames.sort()
    },
  }
})()

fi.libraryMethod()
