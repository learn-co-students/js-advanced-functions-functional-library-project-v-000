const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = Array.isArray(collection) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++)
        callback(newCollection[i])

      return collection
    },

    map: function(collection, callback) {
      if (!Array.isArray(collection)) collection = Object.values(collection)

      const newArray = []

      for (let i = 0; i < collection.length; i++)
        newArray.push(callback(collection[i]))

      return newArray
    },

    reduce: function(collection, callback, acc) {
      if (!Array.isArray(collection)) collection = Object.values(collection)

      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      for (let i=0; i < collection.length; i++){
        acc = callback(acc, collection[i], collection)
      }

      return acc
    },

    find: function(collection, predicate) {
      if (!Array.isArray(collection)) collection = Object.values(collection)

      for (let i = 0; i < collection.length; i++)
      if (predicate(collection[i])) return collection[i]
      
      return undefined
    },
    
    filter: function(collection, predicate) {
      if (!Array.isArray(collection)) collection = Object.values(collection)
      
      const newCollection = []

      for (let i = 0; i < collection.length; i++)
        if (predicate(collection[i])) newCollection.push(collection[i])

      return newCollection
    },

    size: function(collection) {
      return !Array.isArray(collection) ? Object.values(collection).length : collection.length
    },

    first: function(array, n) {
      return !n ? array[0] : array.slice(0, n)
    },

    last: function(array, n) {
      return !n ? array[array.length - 1] : array.slice(array.length - n)
    },

    compact: function(array) {
      const newArray = []

      for (let i = 0; i < array.length; i++)
        if (!!array[i]) newArray.push(array[i])
      
      return newArray
    },

    sortBy: function(array, callback) {
      return [...array].sort((a,b) =>  callback(a) - callback(b))
    },

    flatten: function(array, shallow) {
      if (!shallow) {
        return array.reduce((acc, value) => {
          return (Array.isArray(value)) ? acc.concat(this.flatten(value)) : acc.concat(value)
        }, [])
      } else {
        return array.reduce((acc, value)=>{
          return Array.isArray(value) ? acc.concat([...value]) : acc.concat(value)
        }, [])
      }
    },

    uniq: function(array, isSorted, callback) {
      if (isSorted) {
        let newArray = []
        for(let i=0; i < array.length; i++) {
          if (i === 0 || array[i] !== array[i-1]) {
            newArray.push(array[i])
          }
        }
        return newArray
      }
      else if (callback){
        let callbackArray = array.map(callback)
        
        return array.filter((value, index) => {
          return callbackArray.indexOf(callback(value)) === index
        })
      }
      else {
        return array.filter((value, index) => {
          return array.indexOf(value) === index
        })
      }
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      const allFunctions = []

      for (let key in object) {
        if (typeof object[key] === "function") allFunctions.push(key)
      }

      return allFunctions
    }
  }
})()

fi.libraryMethod()
