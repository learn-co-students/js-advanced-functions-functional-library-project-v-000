const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++) {
        cb(newCollection[i], i, newCollection)
      }
      return collection
    },

    map: function(collection, cb) {
      const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection)
      let arr = []
      for (let i = 0; i < newCollection.length; i++) {
        arr.push(cb(newCollection[i], i, newCollection))
      }
      return arr
    },

    reduce: function(c, cb, initialValue) {
      const collection = Array.isArray(c) ? c.slice() : Object.values(c)
      let acc
      let newCollection
      if (!!initialValue) {
        acc = initialValue
        newCollection = collection.slice()
      } else {
        acc = collection[0]
        newCollection = collection.slice(1)
      }
      for (let i = 0; i < newCollection.length; i++) {
        acc = cb(acc, newCollection[i], newCollection)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let arr = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          arr.push(collection[i])
        }
      }
      return arr
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(array, n) {
      return !!n ? array.slice(0, n) : array[0]
    },

    last: function(array, n) {
      return !!n ? array.slice(array.length - n, array.length) : array[array.length-1]
    },

    compact: function(array) {
      let newArr = []
      for (let i = 0; i < array.length; i++) {
        if (array[i]) newArr.push(array[i])
      }
      return newArr
    },

    sortBy: function(array, cb) {
      let newArr = array.slice()
      return newArr.sort((a, b) => cb(a) - cb(b))
    },

    flatten: function(array, bool) {
      const flat = [].concat(...array)
      if (bool) {
        return flat
      } else {
        return (flat.some(Array.isArray)) ? fi.flatten(flat) : flat
      }
    },

    uniq: function(collection, bool, cb) {
      let array = collection instanceof Array ? collection : Object.values(collection)
      let newArr = []

      for (let i = 0; i < array.length; i++) {
        if (cb) {
          if (!newArr.find(e => cb(e) === cb(array[i]))) newArr.push(array[i])
        } else {
          if (!newArr.find(e => e === array[i])) newArr.push(array[i])
        }
      }
      return newArr
    },

    keys: function(obj) {
      let keys = []
      for (let key in obj) {
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      let values = []
      for (let key in obj) {
        values.push(obj[key])
      }
      return values
    },

    functions: function(obj) {
      let functions = []
      for (let func in obj) {
        if (typeof obj[func] === 'function') functions.push(func)
      }
      return functions.sort()
    }



  }
})()

fi.libraryMethod()
