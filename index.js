const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {

      const iterator = Object.values(collection)

      for (let num of iterator) {
        alert(num);
      }

      return collection;

    },

    map: function(collection, cb) {

      const array = [];

      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }

      for (let num of collection) {
        array.push(cb(num));
      }
      
      return array;

    },

    reduce: function(collection, cb, acc) {

      for (let i = 0; i < collection.length; i++) {

        if (acc === undefined || NaN) {
          acc = collection[0];
          i++;
        }

        let callback = cb(acc, collection[i], collection)

        acc = callback;

      }

      return acc;

    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          return collection[i];
        }
      }
    },

    filter: function(collection, predicate) {
      const array = [];

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          array.push(collection[i]);
        }
      }

      return array;    
    },

    size: function(collection) {
      return Object.keys(collection).length;
    },

    first: function(array, n) {
      if (n === undefined || NaN) {
        return array[0];
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n) {
      if (n === undefined || NaN) {
        const num = this.size(array) - 1;

        return array[num];

      } else {
        return array.slice(-n);
      }
    },

    compact: function(array) {
      const collection = [];

      for (let num of array) {
        if (num) {
          collection.push(num);
        }
      }

      return collection;
    },

    sortBy: function(array, cb) {
      let sortArr = [...array];

      return sortArr.sort(function(a, b) {
        return cb(a) - cb(b);
      })

    },

    flatten: function(array, d) {

      function flatDeep(array, d) {

        return d > 0 ? array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), []) : array.slice();
       
      };

      if (d === true) {
        d = 1;
      } else {
        d = Infinity;
      }

      return flatDeep(array, d);

    },

    uniq: function(array, isSorted, cb) {

      const sortArr = [...array];

      function uniqueArr(element, index, self) {
        return self.indexOf(element) === index;
      }

      if (!(cb === undefined)) {

        const cbArr = [];

        for (let element of sortArr) {
          if (!(cb(element) === 0)) {
            cbArr.push(element);
          }
        }

        return cbArr.filter(uniqueArr);
      }

      return sortArr.filter(uniqueArr);

    },

    keys: function(obj) {
      return Object.keys(obj);
    },

    values: function(obj) {
      return Object.values(obj);
    },

    functions: function(obj) {

      const funcObj = [];

      for (const [key, val] of Object.entries(obj)) {
        if (typeof(val) === "function") {
          funcObj.push(key);
        }
      }

      return funcObj.sort();
      
    },
  }
})()

fi.libraryMethod()
