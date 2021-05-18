const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

// Collection functions
    each: function(collection, callback) {
      for (let i = 0; i < Object.keys(collection).length; i++) {
        callback(
          collection[Object.keys(collection)[i]],
          Object.keys(collection)[i],
          collection
        );
      };

      return collection;
    },

    map: function(collection, callback) {
      let collectionNew = [];

      for (let i = 0; i < Object.keys(collection).length; i++) {
        collectionNew.push(callback(
          collection[Object.keys(collection)[i]],
          Object.keys(collection)[i],
          collection
        ));
      };

      return collectionNew;
    },

    reduce: function(collection, callback, acc) {
      let memo = (acc === undefined) ? collection[Object.keys(collection)[0]] : acc;
      let i = (acc === undefined) ? 1 : 0;

      for (; i < Object.keys(collection).length; i++) {
        memo = callback(
          memo,
          collection[Object.keys(collection)[i]],
          collection
        );
      }

      return memo;
    },

    find: function(collection, predicate) {

      for (let i = 0; i < Object.keys(collection).length; i++) {
          if (predicate(collection[Object.keys(collection)[i]])) {
            return collection[Object.keys(collection)[i]];
          }
      };

      return undefined;
    },

    filter: function(collection, predicate) {
      let returnArray = [];

      for (let i = 0; i < Object.keys(collection).length; i++) {
        if (predicate(collection[Object.keys(collection)[i]])) {
          returnArray.push(collection[Object.keys(collection)[i]]);
        }
      };

      return returnArray;
    },

    size: function(collection) {
      return Object.keys(collection).length;
    },

// Array functions
    first: function(array, n) {
      if (n === undefined) {
        return array[0];
      } else {
        return array.slice(0, n);
      };
    },

    last: function(array, n) {
      if (n === undefined) {
        return array[array.length - 1];
      } else {
        return array.slice(array.length - n, array.length);
      };
    },

    compact: function(array) {
      let returnArray = [];

      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          returnArray.push(array[i]);
        }
      };

      return returnArray;
    },

    sortBy: function(array, callback) {
      let returnArray = [...array];
      return returnArray.sort(function(a,b){
        return callback(a) - callback(b);
      });
    },

    // unpack: function(receiver, arr) {
    //   for (let val of arr)
    //     receiver.push(val)
    // },

    flattenMore: function(returnArray, array) {
      for (let element of array)
        returnArray.push(element)
    },

    flatten: function(array, shallow, returnArray=[]) {
      if (!Array.isArray(array)) {
        return returnArray.push(array);
      };

      if (shallow) {
        for (let element of array)
          Array.isArray(element) ? this.flattenMore(returnArray, element) : returnArray.push(element)
      } else {
        for (let element of array) {
          this.flatten(element,false,returnArray);
        }
      };
      return returnArray;
    },

    uniqSort: function(array, callback) {
      const sortedArray = [array[0]];

      for (let i = 1; i < array.length; i++) {
        if (sortedArray[i-1] !== array[i]) {
          sortedArray.push(array[i]);
        }
      }
      return sortedArray;
    },

    uniq: function(array, sorted=false, callback=false) {
      if (sorted) {
        return this.uniqSort(array, callback);
      } else if (!callback) {
        return Array.from(new Set(array));
      } else {
        const updatedVals = new Set();
        const uniqVals = new Set();
        for (let element of array) {
          const modVal = callback(element);
          if (!updatedVals.has(modVal)) {
            updatedVals.add(modVal);
            uniqVals.add(element);
          }
        }
        return Array.from(uniqVals);
      }
    },

// Object functions

    keys: function(obj) {
      let keys = [];

      for (let key in obj) {
        keys.push(key);
      }

      return keys;
    },

    values: function(obj) {
      let vals = [];

      for (let key in obj) {
        vals.push(obj[key]);
      }

      return vals;
    },

    functions: function(obj) {
      let funcName = [];

      for (let key in obj) {
        if (typeof obj[key] === "function") {
          funcName.push(key);
        }
      }

      return funcName.sort();
    },


  }
})()

fi.libraryMethod()
