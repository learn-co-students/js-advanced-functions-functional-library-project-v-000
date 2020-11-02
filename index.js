const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let element of Object.values(collection)){
        callback(element);
      }
      return collection;
    },

    map: function(collection, callback) {
      let result = [];
      
      for (let element of Object.values(collection)){
        result.push(callback(element));
      }
      return result;
    },

    reduce: function(collection, callback, acc) {
      let newCollection = collection.slice();
      
      if (!acc) {
        acc = newCollection[0];
				newCollection = collection.slice(1);
      }
      
      for (let i = 0; i < newCollection.length; i++){
        acc = callback(acc, newCollection[i], collection);
      }
      return acc;
    },
    
    find: function(collection, callback) {
      for (let element of collection) {
        if (callback(element)) {
          return element;
        }
      }
    },

    filter: function(collection, callback) {
      let result = [];
      for (let element of collection) {
        if (callback(element)) {
          result.push(element);
        }
      }
      return result;
    },

    size: function(collection) {
      return Object.values(collection).length;
    },
    
    first: function(collection, element) {
      if (element){
        return collection.slice(0, element);
      }
      else {
        return collection[0];
      }
    },
    
    last: function(collection, element) {
      if (element){
        return collection.slice(element * -1);
      }
      else {
        return collection[collection.length - 1];
      }
    },
    
    compact: function(collection) {
      let result = [];
      
      for (let element of collection) {
        if (element) {
          result.push(element);
        }
      }
      return result;
    },
    
    sortBy: function(array, callback) {
      let newArray = [...array];
      
      return newArray.sort(function(a,b) {
        return callback(a) - callback(b);
      });
    },
    
    // flatten: function(array, shallow) {
  
    // },
    
    // uniq: function(array, sorted=false, iter=false) {
  
    // },
    
    keys: function(object) {
      return Object.keys(object);
    },
    
    values: function(object) {
      return Object.values(object);
    },


    functions: function(object) {
      let sortedArray = [];
      
      for (let key in object) {
        if (typeof object[key] === 'function') {
          sortedArray.push(key);
        }
      }
      return sortedArray.sort();
    },


  }
})()

fi.libraryMethod()
