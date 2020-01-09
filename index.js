const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i]);
        }
      } else {
        let object = Object.values(collection);
        for (let i = 0; i < object.length; i++) {
          callback(object[i]);
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      let newCollection = [];
      if (Array.isArray(collection) === true) {
        for (let i = 0; i < collection.length; i++) {
          newCollection.push(callback(collection[i]));
        }
      } else {
        let object = Object.values(collection);
        for (let i = 0; i < object.length; i++) {
          newCollection.push(callback(object[i]));
        }
      }
      return newCollection;
    },

    reduce: function(collection, callback, accumulator = 0) {
      for (const element of collection) {
        accumulator = accumulator + callback(accumulator = 0, element, collection)
      }
      return accumulator;
    },

    functions: function() {

    },

    find: function(collection, predicate) {
      for (const element of collection) {
        if (predicate(element)){
          return element;
        }
      }
    },

    filter: function(collection, condition) {
      let newArray = [];
      for (const element of collection) {
        if (condition(element)) {
          newArray.push(element);
        }
      }
      return newArray;
    },

    size: function(object) {
      return Object.keys(object).length;
    },

    first: function(collection, number = 1) {
      if (number === 1) {
        return collection[0];
      }
      collection.splice(number);
      return collection;
    },

    last: function(collection, number = 1) {
      if (number === 1) {
        return collection[collection.length - 1];
      }
      return collection.splice(-number);
    },

    compact: function(collection) {
      let newArray = [];
      for (const element of collection) {
        if (element) {
          newArray.push(element)
        }
      }
      return newArray;
    },

    sortBy: function(collection, condition) {
      let collectionCopy = collection.slice();
      if (typeof(collectionCopy[0]) == "string") {
        return collectionCopy.sort();
      } else {
        return collectionCopy.sort(function(a, b){return condition(a) - condition(b)});
      }
    },

    flatten: function(collection, condition = false) {
      if (condition == false) {
        return collection.flat(Infinity);
      } else {
        return collection.flat();
      }
    },

    uniq: function() {
      
    }

  }
})()

fi.libraryMethod()
