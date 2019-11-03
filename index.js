const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    standardize: function(collection) {
      return (collection instanceof Array) ? collection : Object.values(collection)
    },

    each: function(collection, callback) {
      let sc = this.standardize(collection)

      for(let i=0; i<sc.length; i++) {
        callback(sc[i])
      }

      return collection;
    },

    map: function(collection, callback) {
      let result = []
      let addResult = el => result.push(callback(el))

      this.each(collection, addResult)

      return result;
    },

    reduce: function(collection, callback, acc) {
      let sc = this.standardize(collection);
      if (!acc) {
        acc = sc.shift(sc)
      }

      for(let i=0; i<sc.length; i++) {
        acc = callback(acc, sc[i], sc);
      }

      return acc;

    },

    find: function(collection, predicate) {
      for(let i=0; i<collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    },

    filter: function(collection, predicate) {
      let result = [];
      for(let i=0; i<collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
      return result;
    },

    size: function(collection) {
      return this.standardize(collection).length;
    },

    first: function(arr, n) {
      if(n) {
        return arr.slice(0, n);
      } else {
        return arr[0];
      }
    },

    last: function(arr, n) {
      if(n) {
        let start = arr.length - n;
        let end = arr.length;
        return arr.slice(start, end);
      } else {
        return arr[arr.length-1];
      }
    },

    compact: function(arr) {
      let result = [];
      let include = x => {
        if (x) {
          result.push(x);
        }
      }
      this.each(arr, include);
      return result;
    },

    sortBy: function(arr, callback) {
      let sortArr = [...arr];
      return sortArr.sort(function(a,b) {
        return callback(a) - callback(b);
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

    uniqSorted: function(collection, callback) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, callback=false) {
      if (sorted) {
        return fi.uniqSorted(collection, callback)
      } else if (!callback) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = callback(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      return Object.keys(obj);
    },

    values: function(obj) {
      return Object.values(obj);
    },

    functions: function(obj) {
      let result = []
      let arr = Object.entries(obj)

      let addResult = el => {
        let k = el[0];
        let v = el[1];
        if (typeof v === 'function') {
          result.push(k)
        }
      };

      this.each(arr, addResult);
      return result.sort();
    }
  }
})()

fi.libraryMethod()
