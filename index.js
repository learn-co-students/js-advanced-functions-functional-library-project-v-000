const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const keyOrIndex in collection) {
        callback(collection[keyOrIndex], keyOrIndex, collection)
      }
      return collection
    },

    map: function(collection, callback) {
      const newArray = [];
      for (const keyOrIndex in collection) {
        newArray.push(callback(collection[keyOrIndex], keyOrIndex, collection))
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      let i;

      if (acc || acc === 0) {
        i = 0;
      } else {
        i = 1;
        acc = collection[0];
      }

      for (; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc;
    },

    functions: function(object) {
      let sortedFunctions = [];

      for (const key in object) {
        if (typeof object[key] === 'function') {
          sortedFunctions.push(key)
        }
      }
      return sortedFunctions.sort();
    },

    find: function(collection, predicate) {
      for (const keyOrIndex in collection) {
        if (predicate(collection[keyOrIndex])) {
          return collection[keyOrIndex]
        }
      }
    },

    filter: function(collection, predicate) {
      let newArray = [];
      for (const keyOrIndex in collection) {
        if (predicate(collection[keyOrIndex])) {
          newArray.push(collection[keyOrIndex])
        }
      }
      return newArray;
    },

    size: function(collection) {
      let i = 0;
      for (const keyOrIndex in collection) {
        i++
      }
      return i;
    },

    first: function(array, n) {
      let firstItems = [];
      if (!n) {
        return array[0];
      } else {
        for (let i = 0; i < n && i < array.length; i++) {
          firstItems.push(array[i]);
        }
      }
      return firstItems;
    },

    last: function(array, n) {
      let lastItems = [];
      if (!n) {
        return array.slice(-1)[0];
      } else {
        return array.slice(-n);
      }
    },

    compact: function(array) {
      let newArray = [];
      for (const keyOrIndex in array) {
        if (array[keyOrIndex]) {
          newArray.push(array[keyOrIndex])
        }
      }
      return newArray;
    },

    sortBy: function(array, callback) {
      let sortedArray = [];
      for (const element of array) {
        sortedArray.push(element)
      }
      return sortedArray.sort(function(a, b) {
        return callback(a) - callback(b)
      });
    },

    flatten: function(array, shallow) {
      let flattened = [];
      if (shallow) {
        for (const element of array) {
          if (Array.isArray(element)) {
            for (const nestedElement of element) {
              flattened.push(nestedElement);
            }
          } else {
            flattened.push(element);
          }
        }
      } else {
        for (const element of array) {
          if (Array.isArray(element)) {
            const arrayFlatten = this.flatten(element);
            for (const nestedElement of arrayFlatten) {
              flattened.push(nestedElement);
            }
          } else {
            flattened.push(element);
          }
        }
      }
      return flattened;
    },

    uniq: function(array, isSorted, callback) {
      let uniqueArray
      if (callback) {
        let arr = [... array].map(element => callback(element))
        uniqueArray = array.filter( (value, index, array) => arr.indexOf(callback(value)) === index);
      } else {
        uniqueArray = [...new Set(array)]
      }
      return uniqueArray;
    },

    keys: function(object) {
      let keyCollection = [];
      for (const key in object) {
        keyCollection.push(key)
      }
      return keyCollection;
    },

    values: function(object) {
      let valuesCollection = [];
      for (const key in object) {
        valuesCollection.push(object[key])
      }
      return valuesCollection;
    }

  }
})()

fi.libraryMethod()
