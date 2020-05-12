const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

      if (Array.isArray(collection)) {
        const newCollection = [...collection];
        for (let index = 0; index < newCollection.length; index++) {
          const element = newCollection[index];
          callback(element, index, newCollection)
        }
      } else {
        const newCollection = Object.assign({}, collection);
        let keys = Object.keys(newCollection)
        keys.forEach(element => {
          callback(newCollection[element], element, newCollection)
        });
      }

      return collection;

    },

    map: function(collection, callback) {

      const newArray = []

      if (Array.isArray(collection)) {
        const newCollection = [...collection];
        for (let index = 0; index < newCollection.length; index++) {
          const element = newCollection[index];
          newArray.push(callback(element, index, newCollection))
        }
      } else {
        const newCollection = Object.assign({}, collection);
        let keys = Object.keys(newCollection)
        keys.forEach(element => {
          newArray.push(callback(newCollection[element], element, newCollection))
        });
      }

      return newArray
      
    },

    reduce: function(collection, callback, acc) {

      let idx = acc ? 0 : 1

      if (Array.isArray(collection)) {
        const newCollection = [...collection];
        let accumulator = acc ? acc : newCollection[0]
        for (let index = idx; index < newCollection.length; index++) {
          const element = newCollection[index];
          accumulator = callback(accumulator, element, newCollection)
        }
        return accumulator;
      } else {
        const newCollection = Object.assign({}, collection);
        const keys = Object.keys(newCollection)
        let accumulator = acc ? acc : keys[0]
        for (let index = idx; index < keys.length; index++) {
          const element = keys[index];
          accumulator = callback(accumulator, newCollection[element], newCollection)
        }
        return accumulator;
      }

    },

    find: function(collection, predicate) {

      if (Array.isArray(collection)) {
        const newCollection = [...collection];
        for (let index = 0; index < newCollection.length; index++) {
          const element = newCollection[index];
          if (predicate(element)) {
            return element
          };
        }
      } else {
        const newCollection = Object.assign({}, collection);
        let values = Object.values(newCollection)
        values.forEach(element => {
          if (predicate(element)) {
            return element;
          }
        });
      }

    },

    filter: function(collection, predicate)  {

      const newArray = []

      if (Array.isArray(collection)) {
        const newCollection = [...collection];
        for (let index = 0; index < newCollection.length; index++) {
          const element = newCollection[index];
          if (predicate(element)) {
            newArray.push(element)
          }
        }
      } else {
        const newCollection = Object.assign({}, collection);
        let values = Object.values(newCollection)
        values.forEach(element => {
          if (predicate(element)) {
            newArray.push(element)
          }
        });
      }

      return newArray;

    },

    size: function(collection) {

      if (Array.isArray(collection)) {
        return collection.length;
      } else {
        const keys = Object.keys(collection)
        return keys.length;
      }
      
    },

    first: function(array, n) {
      if (n) {
        const newArray = []
        for (let index = 0; index < n; index++) {
          const element = array[index];
          newArray.push(element)
        }
        return newArray
      } else {
        return array[0]
      }
    },

    last: function(array, n) {
      if (n) {
        const newArray = []
        for (let index = array.length - n; index < array.length; index++) {
          const element = array[index];
          newArray.push(element)
        }
        return newArray
      } else {
        return array[array.length-1]
      }
    },

    compact: function(array)  {
      const newArray = []
      array.forEach(element => {
        if (element) {
          newArray.push(element)
        }
      });
      return newArray
    },

    sortBy: function(array, callback) {
      const newArray = [...array];
      newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      });
      return newArray;
    },

    flatten: function(array, shallow) {
      const newArray = []

      function drillAndExtract(array) {
        array.forEach(element => {
          if (Array.isArray(element)) {
            drillAndExtract(element)
          } else {
            newArray.push(element)
          }
        });
      }

      if (shallow === true) {
        array.forEach(element => {
          if (Array.isArray(element)) {
            element.forEach(el => {
              newArray.push(el)
            });
          } else {
            newArray.push(element)
          }
        });
      } else {
        array.forEach(element => {
          if (Array.isArray(element)) {
            drillAndExtract(element)
          } else {
            newArray.push(element)
          }
        });
      }
      return newArray
    },

    uniq: function(array, isSorted, callback) {
      let uniqueArray
      if (callback) {
        let arr = [... array].map(element => callback(element))
        uniqueArray = array.filter((v, i, array) => arr.indexOf(callback(v)) === i); 
      } else {
        uniqueArray = [...new Set(array)]
      }
      return uniqueArray
    },

    keys: function(object) {
      const keys = Object.keys(object)
      return keys
    },

    values: function(object) {
      const values = Object.values(object)
      return values
    },

    functions: function(object) {
      const newArray = []
      const keys = Object.keys(object)
      keys.forEach(element => {
        if (typeof object[element] === 'function') {
          newArray.push(element)
        }
      });
      return newArray;
    },

  }
})()

fi.libraryMethod()
