const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          callback(collection[i]);
        }
      } else {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++){
          callback(collection[keys[i]]);
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      let arr = [];
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          arr.push(callback(collection[i], i, collection));
        }
      } else {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++){
          arr.push(callback(collection[keys[i]], i, collection));
        }
      }
      return arr;
    },

    reduce: function(collection, callback, acc) {
      if (Array.isArray(collection)){
        let total;
        if (acc) {
          total = acc;
        } else {
          total = collection[0];
          collection = collection.slice(1);
        }

        for (let i = 0; i < collection.length; i++){
          total = callback(total, collection[i], collection);
        }

        return total;

      } else {
        let total = acc;
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++){
          total = callback(total, collection[keys[i]], collection);
        }

        return total;
      }   
    },

    find: function(collection, predicate){
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          if(predicate(collection[i])) {
            return collection[i];
          };
        }
      } else {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++){
          if (predicate(collection[keys[i]])) {
            return collection[keys[i]];
          }
        }
      }
    },

    filter: function(collection, predicate){
      let arr = [];
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          if(predicate(collection[i])) {
            arr.push(collection[i]);
          };
        }
      } else {
        const keys = Object.keys(collection);
        for (let i = 0; i < keys.length; i++){
          if (predicate(collection[keys[i]])) {
            arr.push(collection[keys[i]]);
          }
        }
      }
      return arr;
    },

    size: function(collection){
      if (Array.isArray(collection)){
        return collection.length;
      } else {
        const keys = Object.keys(collection);
        return keys.length;
      }
    },

    first: function(collection, n){
      if (n) {
        return collection.slice(0, n);
      } else {
        return collection[0];
      }
    },

    last: function(collection, n) {
      if (n) {
        return collection.slice(-n);
      } else {
        return collection[collection.length - 1];
      }
    },

    compact: function(arr){
      return fi.filter(arr, function(item) {if(item){return item}});
    },

    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      // Using for loop
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      // Using for loop
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

      // Using the custom 'map' method from above
      // return this.map(obj, (value) => value)

    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    }

  }
})()

fi.libraryMethod()
