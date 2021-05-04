const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (Array.isArray(collection))? collection : Object.values(collection)
      for (const element of newCollection) {
        callback(element)
      }
      return collection
    },

    map: function(collection, callback) {
      const arrayCollection = (Array.isArray(collection))? collection : Object.values(collection)
      const newCollection = [];
      for (const element of arrayCollection) {
        newCollection.push(callback(element))
      }
      return newCollection

    },

    reduce: function(collection, callback, acc) {
      const arrayCollection = (Array.isArray(collection))? collection : Object.values(collection)
      if (acc) {
        for (const e of arrayCollection) {
          acc = callback(acc, e, arrayCollection)
        }
      return acc;
      }
      else {
        let acc = arrayCollection[0];
        for (const e of arrayCollection.slice(1)) {
          acc = callback(acc, e, arrayCollection)
        }
        return acc;
      }    

    },

    find: function(collection, predicate) {
      const arrayCollection = (Array.isArray(collection))? collection : Object.values(collection)
      for (const element of arrayCollection) {
        if (predicate(element)) {
          return element
        }
      }

    },

    filter: function(collection, predicate) {
      const arrayCollection = (Array.isArray(collection))? collection : Object.values(collection)
      const newArray = []
      for (const element of arrayCollection) {
        if (predicate(element)) {
          newArray.push(element)
        }
      }
      return newArray
    },

    size: function(collection) {
      const arrayCollection = (Array.isArray(collection))? collection : Object.values(collection)
      return arrayCollection.length
    },

    first: function(array, n=1) {
      return (n === 1)? array.slice(0, n)[0] : array.slice(0, n)
    },

    last: function(array, n=-1) {
      return (n === -1)? array.slice(n)[0] : array.slice(-n)
    },

    compact: function(array) {
      const newArray = [];
      for (const element of array) {
        if (element) {
          newArray.push(element)
        }
      }
      return newArray
    },

    sortBy: function(array, callback) {
      const newArray = [...array]
      return newArray.sort(function(a,b) {
        return callback(a) - callback(b)
      });
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

    // object functions
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