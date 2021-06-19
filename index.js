const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (collection instanceof Array) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      }else{
        for (const property in collection) {
          callback(collection[property], property, collection)
        }
      }

      return collection
    },

    map: function(collection, callback) {
      let newCollection = []

      if (collection instanceof Array) {
        for (let i = 0; i < collection.length; i++) {
          newCollection.push(callback(collection[i], i, collection))
        }
      }else{
        for (const [key, value] of Object.entries(collection)) {
          newCollection.push(callback(value, key, collection))
        }
      }

      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let newCollection = collection

      if (acc) {
        for (const e of newCollection) {
          acc = callback(acc, e, newCollection)
        }
        return acc
      }else{
        let acc = newCollection[0]

        for (const e of newCollection.slice(1)) {
          acc = callback(acc, e, newCollection)
        }
        return acc
      }
    },

    find: function(collection, predicate) {
      for (const e of collection) {
        if (predicate(e)) {
          return e
        }
      }
    },

    filter: function(collection, predicate) {
      let newCollection = []

      for (const e of collection) {
        if (predicate(e)) {
          newCollection.push(e)
        }
      }

      return newCollection
    },

    size: function(collection) {
      let newCollection = (collection instanceof Array) ? collection : Object.values(collection)

      return newCollection.length
    },

    first: function(array, n) {
      if (n) {
        return array.slice(0, n)
      }else{
        return array[0]
      }
    },

    last: function(array, n) {
      return (n) ? array.slice(-n) : array.slice(-1)[0]
    },

    compact: function(array) {
      let newCollection = []

      for (const e of array) {
        if (!!e) {
          newCollection.push(e)
        }
      }

      return newCollection
    },

    sortBy(array, callback) {
      let sortedArray = [...array]

      return sortedArray.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, shallow, newArr = []) {
      if (shallow) {
        return newArr.concat.apply([], array)
      } else {
        for (const element of array) {
          if (Array.isArray(element)) {
            fi.flatten(element, false, newArr)
          }
          else {
            newArr.push(element)
          }
        }
        return newArr
      }
    },

    uniq: function(array, isSorted, callback = a => a) {
      if (isSorted) {
        const newArr = [array[0]]
        for (let i = 1; i < array.length; i++) {
          if (callback(array[i-1]) !== callback(array[i])) {
            newArr.push(array[i])
          }
        }
        return newArr

      } else {
        const uniqueArray = []
        for (const element of array) {
          let counter = 0;
          for (const uniqElement of uniqueArray) {
            if (callback(uniqElement) === callback(element)) {
              counter++;
            };
          };
          if (counter < 1) {
            uniqueArray.push(element);
          };
        };

        return uniqueArray;
      }
    },

    keys: function(obj) {
      const keys = [];
      for (const key in obj) {
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      const values = [];
      for (const key in obj) {
        values.push(obj[key])
      }
      return values

    },

    functions: function(obj) {
      const fnArray = [];
      for (const key in obj) {
        if (typeof obj[key] === 'function') {
          fnArray.push(key)
        }
      }
      return fnArray
    }
  }
})()

fi.libraryMethod()
