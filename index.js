const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

      for (let [key, value] of Object.entries(collection)) {
        callback(value);
      }
      return collection
    },

    map: function(collection, callback) {
      let newColl = [];
      for (let [key, value] of Object.entries(collection)) {
        let newVal = callback(value);
        newColl.push(newVal)
      }
      return newColl
    },

    reduce: function(collection, callback, acc) {
      let newVal = (!!acc) ? acc : collection[0]
      let i = (!!acc) ? 0 : 1
      for (; i<collection.length; i++)  {
          newVal = callback(newVal,collection[i]);
      }
      return newVal;
    },

    find: function(collection, predicate) {
      for (let i=0; i<collection.length; i++){
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      let newCol = [];
      for (let i=0; i<collection.length; i++){
        if (predicate(collection[i])) {
          newCol.push(collection[i]);
        }
      }
      return newCol;
    },

    size: function(collection) {
      let i = 0;
      for (let [key, value] of Object.entries(collection)) {
        i++
      }
      return i
    },

    first: function(array, n) {
      let newCol = [];
      let count = (!!n) ? n : 1
      if (count == 1)
        return array[0];
      for (let i=0; i<count; i++) {
        newCol.push(array[i])
      }
      return newCol;
    },

    last: function(array, n) {
      let newCol = [];
      let count = (!!n) ? n : 1
      let current = 0;
      if (count == 1)
        return array[array.length - 1];
      for (let i=array.length - 1; current != count; i--) {
        newCol.unshift(array[i])
        current++
      }
      return newCol;
    },

    compact: function(array) {
      let newCol =[];
      for (let i = 0; i<array.length; i++) {
        if (array[i])
          newCol.push(array[i])
      }
      return newCol;
    },

    sortBy: function(array, callback) {
      let newCol = [...array];
      return newCol.sort(function(a,b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(array, shallow) {
      if (!!shallow)
        return array.flat()
      else
        return array.flat(Infinity)
    },

    uniq: function(array, sorted, callback) {
      let newCol =[];
      for (let i=0; i<array.length; i++) {
        let instance = 0;
        for (let n=0; n<newCol.length; n++) {
          if (!!callback) {
            if (callback(array[i])==callback(newCol[n]))
              instance++;
          }
          if (array[i]==newCol[n])
            instance++;
        }
          if (instance > 0) {}
          else
            newCol.push(array[i])
      }
      console.log(newCol)
      return newCol;
    },

    keys: function(objects) {
      let newCol = [];
      for (let [key] of Object.entries(objects)) {
        newCol.push(key);
      }
      return newCol
    },

    values: function(objects) {
      let newCol = [];
      for (let [key, value] of Object.entries(objects)) {
        newCol.push(value);
      }
      return newCol
    },

    functions: function(object) {
      let newCol = [];
      for (let [key, value] of Object.entries(object)) {
        if (typeof value == 'function') 
          newCol.push(key);
      }
      return newCol
    },


  }
})()

fi.libraryMethod()
