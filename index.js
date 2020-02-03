const fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(collection, cb) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          const element = collection[i];
          const index = i;
          cb(element, index, collection);
        }
      } else {
        for (let i = 0; i < Object.keys(collection).length; i++) {
          const key = Object.keys(collection)[i];
          const value = collection[key];
          cb(value, key, collection);
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      const result = [];
      const push = x => result.push(callback(x));
      this.each.call(this, collection, push);
      return result;
    },

    reduce: function(collection, callback, acc = 0) {
      let total = acc;
      const add = function(x) {
        total = callback(total, x, collection);
      };
      this.each.call(this, collection, add);
      return total;
    },

    find: function(collection, predicate) {
      let container;
      const search = function(x) {
        if (predicate(x) === true) {
          container = x;
          throw x;
        }
      };
      try {
        this.each.call(this, collection, search);
      } catch (e) {
        return e;
      }
      return container;
    },

    filter: function(collection, predicate) {
      let container = [];
      const search = function(x) {
        if (predicate(x) === true) {
          container.push(x);
        }
      };
      this.each.call(this, collection, search);
      return container;
    },

    size: function(collection) {
      let count = 0;
      let increment = x => (count += 1);
      this.each.call(this, collection, increment);
      return count;
    },

    first: function(array, n = 0) {
      if (n === 0) {
        return array[n];
      } else {
        let collector = [];
        let s = 0;
        do {
          collector.push(array[s]);
          s += 1;
        } while (s <= n - 1);
        return collector;
      }
    },

    last: function(array, n = 0) {
      if (n === 0) {
        return array[this.size(array) - 1];
      } else {
        let collector = [];
        let s = n - 2;
        do {
          collector.push(array[s]);
          s += 1;
        } while (s <= n);
        return collector;
      }
    },

    compact: function(array) {
      const result = [];
      function send(x) {
        if (Boolean(x)) {
          result.push(x);
        }
      }
      this.each.call(this, array, send);
      return result;
    },

    sortBy: function(array, callback) {
      let collector = [];
      const sort = function(x) {
        let returnedObject = {};
        returnedObject.input = x;
        returnedObject.output = callback(x);
        collector.push(returnedObject);
        collector.sort(function(a, b) {
          return a.output - b.output;
        });
      };
      this.each.call(this, array, sort);

      let outputArray = [];
      const extractInputs = function(o) {
        outputArray.push(o.input);
      };
      this.each.call(this, collector, extractInputs);

      return outputArray;
    },

    flatten: function(arr, shallow = false) {
      const shallowDepth = arr.length;
      if (shallow === true) {
        var array = [];
        while (arr.length >= shallowDepth - 1) {
          var value = arr.shift();
          if (Array.isArray(value)) {
            arr = value.concat(arr);
          } else {
            array.push(value);
          }
        }
        arr[0].forEach(e => array.push(e));
        return array;
      } else {
        var array = [];
        while (arr.length) {
          var value = arr.shift();
          if (Array.isArray(value)) {
            arr = value.concat(arr);
          } else {
            array.push(value);
          }
        }
        return array;
      }
    },
    uniq: function(array, isSorted = false, callback) {
      let collection;
      if (callback != undefined) {
        collection = this.map(array, callback).sort();
      } else if (isSorted === true) {
        collection = array;
      } else {
        collection = array.sort();
      }

      let wm = new WeakMap();
      let hash = {};
      let result = [];
      // IF COLLECTION CONSISTS OF OBJECTS
      for (var i = 0; i < collection.length; i++) {
        if (typeof collection[i] != "number") {
          let obj = collection[i];
          if (wm.has(obj) === false) {
            wm.set(obj, true);
            result.push(obj);
          }
        }
      }

      //IF COLLECTION CONSISTS OF INTEGERS
      for (var i = 0; i < collection.length; i++) {
        if (typeof collection[i] == "number") {
          if (!(collection[i] in hash)) {
            hash[collection[i]] = true;
            result.push(collection[i]);
          }
        }
      }
      return result;
    },
    keys: function(object) {
      let collector = [];
      let prop;
      for (prop in object) {
        collector.push(prop);
      }
      return collector;
    },
    values: function(object) {
      let collector = [];
      let prop;
      for (prop in object) {
        collector.push(object[prop]);
      }
      return collector;
    },
    functions: function(object) {
      let objKeys = this.keys(object);

      function isFunction(key) {
        if (typeof key === "function") {
          return true;
        }
      }

      let returnNames = function(f) {
        return f.name;
      };
      let functionCollection = this.filter(object, isFunction);

      let functionNames = this.map(functionCollection, returnNames);
      let result = functionNames.sort();
      return result;
    }
  };
})();

fi.libraryMethod();
