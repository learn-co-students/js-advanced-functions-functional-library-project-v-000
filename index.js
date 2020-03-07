const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iterator) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++) {
        iterator(newCollection[i])
      }

      return collection;
    },

    map: function(collection, iterator) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newCollection = [];

      for (let i = 0; i < collection.length; i++) {
        newCollection.push(iterator(collection[i]))
      }

      return newCollection;
    },

    reduce: function(collection = [], callback = () => {}, result) {
      let newCollection = collection.slice(0);

      if (!result) {
        result = newCollection[0];
        newCollection = newCollection.slice(1);
      }

      for (let i = 0; i < newCollection.length; i++) {
        result = callback(result, newCollection[i], newCollection);
      }

      return result;
    },

    find: function(collection, item) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }

      for (let i = 0; i < collection.length; i++) {
        if (item(collection[i])) {
          return collection[i]
        }
      }

      return undefined;
    },

    filter: function(collection, item) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }

      const newCollection = [];

      for (let i = 0; i < collection.length; i++) {
        if (item(collection[i])) {
          newCollection.push(collection[i])
        }
      }

      return newCollection;
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length;
    },

    first: function(collection, index = false) {
      return (index) ? collection.slice(0, index) : collection[0];
    },

    last: function(collection, index = false) {
      return (index) ? collection.slice(collection.length-index, collection.length) : collection[collection.length-1];
    },

    compact: function(collection) {
      const removeElements = new Set([false, null, 0, "", undefined, NaN]);
      return collection.filter(e => !removeElements.has(e));
    },

    sortBy: function(collection, callback) {
      let newCollection = [...collection];

      newCollection.sort(function(a, b) {
        return callback(a) - callback(b);
      });

      return newCollection;
    },

    flatten: function(collection, shallow, newCollection = []) {
      if (!Array.isArray(collection)) {
        return newCollection.push(collection)
      }
      if (shallow) {
        for (let e of collection) {
          if (Array.isArray(e)) {
            for (let v of e) {
              newCollection.push(v)
            }
          } else {
            newCollection.push(e)
          }
        }
      } else {
        for (let e of collection) {
          this.flatten(e, false, newCollection)
        }
      }
      return newCollection;
    },

    keys: function(object) {
      let keys = [];
      for (let key in object) {
        keys.push(key)
      }
      return keys
    },

    values: function(object) {
      let values = [];
      for (let key in object) {
        values.push(object[key])
      }
      return values
    },

    uniq: function(collection, isSorted = false, callback = false) {
      if (!callback) {
        return [...new Set(collection)]
      }
      else {
        let regCollection = []
        let newCollection = []
        for (let e of collection) {
          let newE = callback(e)
          if (!regCollection.includes(newE)) {
            regCollection.push(callback(newE))
            newCollection.push(e)
          }
        }
        return newCollection
      }
    },

    functions: function(object) {
      const functionNames = [];
      for (let key in object) {
        if (typeof object[key] === "function") {
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    }
  }
})()

fi.libraryMethod()
