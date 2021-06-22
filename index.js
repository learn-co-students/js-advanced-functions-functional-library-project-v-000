const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let values = Object.values(collection);

      for (let i = 0; i < values.length; i++) {
        callback(values[i], i, values);
      };

      return collection;
    },

    map: function(collection, callback) {
      let values = Object.values(collection);
      let newCollection = [];

      for (let i = 0; i < values.length; i++) {
        newCollection.push(callback(values[i], i, values));
      };

      return newCollection;
    },

    reduce: function(collection, callback, startValue) {
      let values = Object.values(collection);
      let accumulator = !!startValue ? startValue : values[0];
      let i = !!startValue ? 0 : 1;

      for (i; i < values.length; i++) {
        accumulator = callback(accumulator, values[i], values);
      };

      return accumulator;
    },

    find: function(collection, callback) {
      let values = Object.values(collection);

      for (let i = 0; i < values.length; i++) {
        if (callback(values[i])) {
          return values[i];
        };
      };
    },

    filter: function(collection, callback) {
      let values = Object.values(collection);
      let filteredCollection = [];

      for (let i = 0; i < values.length; i++) {
        if (callback(values[i])) {
          filteredCollection.push(values[i]);
        };
      };

      return filteredCollection;
    },

    size: function(collection) {
      let values = Object.values(collection);
      let valuesLength = 0;

      for (let i = 0; i < values.length; i++) {
        valuesLength = i + 1;
      };

      return valuesLength;
    },

    first: function(collection, n) {
      let values = Object.values(collection);
      let firstValues = !!n ? values.slice(0, n) : values[0];
      return firstValues;
    },

    last: function(collection, n) {
      let values = Object.values(collection);
      let lastValues = !!n ? values.slice(values.length - n) : values[values.length - 1];
      return lastValues;
    },

    compact: function(collection) {
      let values = Object.values(collection);
      let compactCollection = [];

      for (let i = 0; i < values.length; i++) {
        if (values[i]) {
          compactCollection.push(values[i]);
        };
      };

      return compactCollection;
    },

    sortBy: function(collection, callback) {
      let values = Object.values(collection);
      let sortedCollection = values.sort((a, b) => (callback(a) > callback(b) ? 1 : -1));
      return sortedCollection;
    },

    flatten: function(collection, shallow) {
      let flattenedCollection = [];

      for (let i of collection) {
        if (Array.isArray(i)) {
          if (shallow === true) {
            for (let j of i) {
              flattenedCollection.push(j);
            };
          } else {
            let result = this.flatten(i);
            for (let j of result) {
              flattenedCollection.push(j);
            };
          };
        } else {
          flattenedCollection.push(i);
        };
      };

      return flattenedCollection;
    },

    uniq: function(collection, isSorted, callback = (x) => x ) {
      const uniqueCollection = [];

      for (const i of collection) {
        let counter = 0;
        for (const n of uniqueCollection) {
          if (callback(n) === callback(i)) {
            counter++;
          };
        };
        if (counter < 1) {
          uniqueCollection.push(i);
        };
      };

      return uniqueCollection;
    },

    keys: function(collection) {
      let keys = Object.keys(collection);
      return keys;
    },

    values: function(collection) {
      let values = Object.values(collection);
      return values;
    },


    functions: function(collection) {
      let functionList = [];

      for (let i in collection) {
        if (typeof collection[i] === "function") {
          functionList.push(i);
        };
      };

      return functionList;
    },
  }

})()

fi.libraryMethod()
