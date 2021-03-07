const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
          callback(collection[i], i, collection)
        }
      } else if(typeof(collection) === "object"){
        for(let i = 0; i < Object.keys(collection).length; i++){
          callback(collection[Object.keys(collection)[i]], Object.keys(collection)[i], i)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = [];
      if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
          newCollection.push(callback(collection[i], i, collection));
        }
      } else if(typeof(collection) === "object"){
        let keys = Object.keys(collection);
        for(let i = 0; i < keys.length; i++){
          newCollection.push(callback(collection[keys[i]], keys[i], collection))
        }
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc = -2) {

      for(let i = 0; i < collection.length; i++){
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      for(let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          return collection[i]
        }
      }
    },
  
    filter: function(collection, predicate) {
      let arrayOfTruth = []

      for(let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          arrayOfTruth.push(collection[i])
        }
      }
      return arrayOfTruth
    },

    size: function(collection) {
      
      if(Array.isArray(collection)){
        return collection.length
      } else {
        let v = Object.values(collection)
        return v.length
      }
    },

    first: function(array, n = 0){
      if (n === 0){
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n = 0){
      if (n === 0){
        return array[array.length-1]
      } else {
        return array.slice(array.length - n)
      }
    },

    compact: function(array){
      let arrayOfTruth = []
      for(let i = 0; i < array.length; i++){
        if (!!array[i]){
          arrayOfTruth.push(array[i])
        }
      }
      return arrayOfTruth
    },

    sortBy: function(array, callback){
      let v = array.slice()
      v.sort((a, b) => callback(a) - callback(b))
      return v
    },

    flatten: function(array, shallow){
      if(shallow){
        return array.flat()
      } else {
        return array.flat(Infinity)
      }
    },

    uniq: function(collection, isSorted, callback = (x) => x ) {
      const arr = [];

      for (const i of collection) {
        let counter = 0;
        for (const n of arr) {
          if (callback(n) === callback(i)) {
            counter++;
          };
        };
        if (counter < 1) {
          arr.push(i);
        };
      };

      return arr;
    },
    keys: function(object){
      let a = Object.keys(object)
      a.sort((a, b) => (a) - (b))
      return a
    },

    values: function(object){
      let a = Object.values(object)
      a.sort((a, b) => (a) - (b))
      return a
    },

    functions: function(object) {
      let functionNames = []
      for(let key in object) {
        if (typeof object[key] === 'function') {
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()
