const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      if (typeof(collection) === 'object') {
        for (let i = 0; i < Object.values(collection).length; i++) {
          cb(Object.values(collection)[i]);
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          cb(collection[i]);
        }
      }
      return collection;
    },

    map: function(collection, cb) {
      const result = [];

      if (typeof(collection) === 'object') {
        for (let i = 0; i < Object.values(collection).length; i++) {
          result.push(cb(Object.values(collection)[i]));
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          result.push(cb(collection[i]));
        }
      }
      return result;
    },

    reduce: function(collection, cb, acc) {
      if (!acc) {
        acc = collection[0];
        collection = collection.slice(1);
      }

      for (const value of collection) {
        acc = cb(acc, value, collection);
      }

      return acc;
    },

    find: function(collection, cb) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }

      for (let i = 0; i < collection.length; i++) {
        if (cb(collection[i])) return collection[i];
      }
      return undefined;
    },

    filter: function(collection, cb) {
      const result = [];
      for (const value of collection) {
        if (cb(value)) result.push(value);
      }
      return result;
    },

    size: function(collection) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }
      return collection.length;
    },

    first: function(collection, n) {
      return (n) ? collection.slice(0, n) : collection[0];
    },

    last: function(collection, n) {
      return (n) ? collection.slice(collection.length - n) : collection[collection.length - 1];
    },

    compact: function(collection) {
      const result = [];

      for (const element of collection.slice()) {
        if (!!element) result.push(element);
      }
      return result;
    },

    sortBy: function(collection, cb) {
      const newArr = collection.slice();
      return newArr.sort((a, b) => cb(a) - cb(b));
    },

    keys: function(obj) {
      const keys = [];

      for (const key in obj) {
        keys.push(key);
      }
      return keys;
    },

    values: function(obj) {
      const values = [];

      for (const key in obj) {
        values.push(obj[key]);
      }
      return values;
    },

    functions: function(obj) {
      const result = [];

      for (const key in obj) {
        if (typeof obj[key] === 'function') result.push(key);
      }
      return result.sort();
    },


  }
})()

fi.libraryMethod()
