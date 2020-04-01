const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const specificCollection = (collection instanceof Array) ? collection : Object.values(collection)
      for (let i = 0; i < specificCollection.length; i++) {
        callback(specificCollection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      const specificCollection = (collection instanceof Array) ? collection : Object.values(collection)
      const newArray = []
      for (let i = 0; i < specificCollection.length; i++) {
        newArray.push(callback(specificCollection[i]))
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      if (acc) {
          for (let i = 0; i < collection.length; i++) {
              acc = callback(acc, collection[i])
          }
          return acc
      } else {
          acc = collection[0]
          for (let i = 1; i < collection.length; i++) {
            acc = callback(acc, collection[i])
          }
      }
      return acc
    },

    find: function(collection, predicate) {
      const specificCollection = (collection instanceof Array) ? collection : Object.values(collection)
      for (let i = 0; i < specificCollection.length; i++) {
        if (predicate(specificCollection[i])) {
          return specificCollection[i]
        } 
      }
      return undefined
    },
    
    filter: function(collection, predicate) {
      const specificCollection = (collection instanceof Array) ? collection : Object.values(collection)
      const filteredArray = []
      for (let i = 0; i < specificCollection.length; i++) {
        if (predicate(specificCollection[i])) {
          filteredArray.push(specificCollection[i])
        }
      }
      return filteredArray
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(array, number) {
      return number ? array.slice(0, number) : array[0]
    },

    last: function(array, number) {
      return number ? array.slice(array.length - number, array.length) : array[array.length - 1]
    },

    compact: function(array) {
      const falsey = [false, null, 0, "", undefined, NaN]
      return array.filter(value => !falsey.includes(value))
    },

    sortBy: function(array, callback) {
      const newArray = [...array]
      return newArray.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, shallow, newArray = []) {
      if (!Array.isArray(array)) {
        return newArray.push(array)
      }

      if (shallow) {
        for (let element of array) {
          if (Array.isArray(element)) {
            for (let value of element) {
              newArray.push(value)
            }
          } else {
            newArray.push(element)
          }
        }
      } else {
        for (let element of array) {
          this.flatten(element, false, newArray)
        }
      }
      return newArray
    },

    uniq: function(collection, isSorted = false, callback = false) {
      if (!callback) {
        return [...new Set(collection)]
      }
      else {
        let transformedArray = []
        let uniqArray = []
        for (let e of collection) {
          let newE = callback(e)
          if (!transformedArray.includes(newE)) {
            transformedArray.push(callback(newE))
            uniqArray.push(e)
          }
        }
        return uniqArray
      }
    },

    keys: function(object) {
      const keys = []
      for (const key in object) {
        keys.push(key)
      }
      return keys
    },

    values: function(object) {
      const values = []
      for (const key in object) {
        values.push(object[key])
      }
      return values
    },

    functions: function(object) {
      const functions = []
      for (const key in object) {
        if (typeof object[key] === "function") {
          functions.push(key)
        }
      }
      return functions.sort()
    },


  }
})()

fi.libraryMethod()

