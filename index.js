const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        collection.forEach( element =>
          callback(element)
        )
      } else { // collection is an Object
        for (const key in collection) {
          if (collection.hasOwnProperty(key)) {
            const element = collection[key];
            callback(element)
          }
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      const newCollection = [];
      if (Array.isArray(collection)) {
        collection.forEach( element =>
          newCollection.push(callback(element))
        )
      } else { // collection is an Object
        for (const key in collection) {
          if (collection.hasOwnProperty(key)) {
            const element = collection[key];
            newCollection.push(callback(element))
          }
        }
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      let total = (!!acc) ? acc : collection[0];
      let i = (!!acc) ? 0 : 1;
      for (i; i < collection.length; i++) {
        total = callback(total, collection[i], collection)
      }
      return total;
    },


    find: function(collection, predicate) {
      if (!Array.isArray(collection)) {
        collection = Object.values(collection)
      }
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    },

    filter: function(collection, predicate) {
      let result = [];
      if (!Array.isArray(collection)) {
        collection = Object.values(collection);
      }
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
      return result;
    },

    size: function(collection) {
      if (!Array.isArray(collection)) {
        collection = Object.values(collection);
      }
      return collection.length;
    },

    first: function(array, num) {
      let n = !!num ? num : 1;
      let result = array.slice(0, n);
      return !!num ? result : result[0];
    },

    last: function(array, num) {
      let n = !!num ? -num : -1;
      let result = array.slice(n);
      return !!num ? result : result[0];
    },


    compact: function(array) {
      let result = [];
      for (const i of array) {
        if (!!i) {
          result.push(i);
        }
      }
      return result;
    },

    sortBy: function(array, callback) {
      let result = [...array];
      return result.sort(function(a, b) {
        return callback(a) - callback(b);
      })
    },

    unpack: function(dest, array) {
      for (let i of array) {
        dest.push(i);
      }
    },

    flatten: function(collection, shallow, newArray = []) {
      if (!Array.isArray(collection)) {
        return newArray.push(collection);
      }
      if (shallow) {
        for (let i of collection) {
          Array.isArray(i) ? this.unpack(newArray, i) : newArray.push(i);
        }
      } else {
        for (let i of collection) {
          this.flatten(i, false, newArray);
        }
      }
      return newArray;
    },


    uniqSorted: function(collection, iteratee) {
      let sorted = [collection[0]];
      for (let i = 1; i < collection.length; i++) {
        if (collection[i] != collection[i - 1]) {
          sorted.push(collection[i]);
        }
      }
      return sorted;
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee);
      } else if (!iteratee) {
        return Array.from(new Set(collection));
      } else {
        const modifiedVals = new Set();
        const uniqVals = new Set();
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal);
            uniqVals.add(val);
          }
        }
        return Array.from(uniqVals);
      }
    },

    keys: function(object) {
      let result = [];
      for (const key in object) {
        result.push(key);
      }
      return result;
    },

    values: function(object) {
      let result = [];
      for (const key in object) {
        result.push(object[key]);
      }
      return result;
    },

    functions: function(object) {
      let result = [];
      for (const key in object) {
        if (typeof object[key] === 'function') {
          result.push(key);
        }
      }
      return result.sort();
    },


  }
})()

fi.libraryMethod()
