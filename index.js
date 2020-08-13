const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, fn) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
 
        for (let i = 0; i < newCollection.length; i++) {
        fn(newCollection[i])
        }

      return collection
    },

    map: function(collection, fn) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      const newArray = []
      for (let i = 0; i < collection.length; i++){
        newArray.push(fn(collection[i]))
      }
      return newArray
    },

    reduce: function(collection = [], callback = () => {}, acc) {
      let newCollection = collection.slice()
      if (!acc) {
				acc = newCollection[0]
				newCollection = collection.slice(1)
      }
      
      for (let i = 0; i < newCollection.length; i++){
        acc = callback(acc, newCollection[i], collection)
      }
      return acc 
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) { 
          return collection[i]
        }  
      }
      return undefined
    },

    filter: function(collection, predicate) {

      let newCollection = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newCollection.push(collection[i])
        }
      }
      return newCollection
    },

    size: function(collection) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      return collection.length
    },

    first: function(array, n = false) {
      if (n) {
        return array.slice(0,n)
      }
      else {
        return array[0]
      }
    },

    last: function(array, n = 1) {
      if (n == 1) {
        return array[array.length - n]
      } 
      else { 
        return array.slice(array.length - n)
      } 
    },

    compact: function(array) {
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    }, 

    sortBy: function(array,fn) {
      let newArray = [...array]
      return newArray.sort(function(a,b) {
        return fn(a) - fn(b)
      })
    },

    flatten: function(array,shallow) {
      let newArray = []
      if (shallow) {
        newArray = array.flat(1)
      } 
      else {
        newArray = array.flat(Infinity)
      }
      return newArray
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
      for (let key in obj) {
        values.push(obj[key])
      }
      return values 
    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionNames.push(obj[key])
        }
      }
      return functionNames
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


  }
})()

fi.libraryMethod()
