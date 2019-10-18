const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const i in collection) {
        callback(collection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      const newCollection = [];
      for (const i in collection) {
        newCollection.push(callback(collection[i]));
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      for (let i = 0; i < collection.length; i++) {
        if (acc === undefined) {
          acc = collection[0];
          i++;
        }
        acc = callback(acc, collection[i], collection);
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (const i in collection) {
        if (!!predicate(collection[i])){
          return collection[i];
        }
      }
    },

    filter: function(collection, predicate) {
      const newCollection = [];
      for (const i in collection) {
        if (!!predicate(collection[i])) {
          newCollection.push(collection[i]);
        }
      }
      return newCollection;
    },

    size: function(collection) {
      let counter = 0
      for (const i in collection) {
        counter++;
      }
      return counter;
    },

    first: function(array, n = 1) {
      const newArray = array.slice(0,n);
      return newArray.length < 2 ? newArray[0] : newArray;
    },

    last: function(array, n = 1) {
      const newArray = array.slice(-n);
      return newArray.length < 2 ? newArray[0] : newArray;
    },

    compact: function(array) {
      const newArray = [];
      for (const i of array) {
        if (!!i) {
          newArray.push(i);
        }
      }
      return newArray;
    },

    sortBy: function(array, callback) {
      const newArray = [...array];
      return newArray.sort((a, b) => (callback(a) > callback(b) ? 1 : -1));
    },

    flatten: function(array, shallow) {
      const newArray = [];
      for (const i of array) {
        if (Array.isArray(i)){
          if (shallow === true) {
            for (const n of i) {
              newArray.push(n)
            }
          } else {
            let result = this.flatten(i);
            for (const n of result) {
              newArray.push(n);
            }
          }
        } else {
          newArray.push(i);
        }
      }
      return newArray;
    },

    uniq: function(array, isSorted, callback=(x) => x ) {
      const newArray = [];
      for (const i of array) {
        let counter = 0;
        for (const n of newArray) {
          if (callback(n) === callback(i)) {
            counter++
          }
        }
        if (counter < 1) {
          newArray.push(i)
        }
      }
      return newArray;
    },

    keys: function(obj) {
      const keyList = [];
      for (const i in obj) {
        keyList.push(i);
      }
      return keyList;
    },

    values: function(obj) {
      const valueList = [];
      for (const i in obj) {
        valueList.push(obj[i]);
      }
      return valueList;
    },

    functions: function(obj) {
      const functionList = [];
      for (const i in obj) {
        if (typeof obj[i] === 'function') {
          functionList.push(i);
        }
      }
      return functionList;
    },
  }
})()

fi.libraryMethod()
