const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

      let pointers = Object.keys(collection)

      for(let i = 0; i < pointers.length; i++) {
          let currentValue = collection[pointers[i]]
          callback(currentValue, i, collection);
      }
      return collection;
    },

    map: function(collection, callback) {
      let modifiedCollection = [];

      let pointers = Object.keys(collection)

      for(let i = 0; i < pointers.length; i++) {
          let currentValue = collection[pointers[i]]
          modifiedCollection.push(callback(currentValue, i, collection));
      }
      return modifiedCollection
    },

    reduce: function(collection, callback, acc) {
      // rememeber: if the acc is not given the first element of the array gets used as the accumulator value
      // and actually gets skipped and isnt passed into the callback function. modify above code to reflect
      // this logic.
      let pointers = Object.keys(collection);

      if (!!acc) {
        let accumulator = acc;
        for(let i = 0; i < pointers.length; i++) {
          let currentValue = collection[pointers[i]]
          accumulator = callback(accumulator, currentValue, collection);
        }
        return accumulator;
      }
      else if(!acc) {
        let accumulator = collection[pointers[0]];

        for(let i = 1; i < pointers.length; i++) {
          let currentValue = collection[pointers[i]]
          accumulator = callback(accumulator, currentValue, collection);
        }
        return accumulator;
      } 
    
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if(!!predicate(collection[i])){
          return collection[i];
        };
      };
    },

    filter: function(collection, predicate) {
      let returnArray = [];

      for (let i = 0; i < collection.length; i++) {
        if(!!predicate(collection[i])){
          returnArray.push(collection[i]);
        };
      };
      return returnArray;
    },

    size: function(collection){
      let pointers = Object.keys(collection);
      return pointers.length;
    },

    first: function(array, elements = 1) {

      let returnArray = [];

      for (let i = 0; i < elements; i++) {
        returnArray.push(array[i]);
      }

      if (returnArray.length === 1) {
        return returnArray[0]
      };

      return returnArray;
    },

    last: function(array, elements = 1) {
      
      let wantedElements = elements;

      let reverseArray = array.slice().reverse();
      
      let returnArray = [];

      for (let i = 0; i < wantedElements; i++) {
        let element = reverseArray[i];
        returnArray.push(element);
      }
      if(wantedElements === 1){
        return returnArray[0];
      }
      return returnArray.reverse();
    },

    compact: function(array) {
      let arrayCopy = array.slice();

      let returnArray = [];

      for (let i = 0; i < array.length; i++) {
        if(!!arrayCopy[i]) {
          let element = arrayCopy[i];
          returnArray.push(element)
        }
      }
      return returnArray;
    },

    sortBy: function(array, callBack) {

      let arrayCopy = array.slice();

      function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
        
        for(var i = 0; i < arrayCopy.length; i++) {
          var min = i;
          for(var j = i + 1; j < arrayCopy.length; j++) {
            if(callBack(arrayCopy[j]) < callBack(arrayCopy[min])) {
              min = j;
            }
          }
          if(i !== min) {
            swap(arrayCopy, i, min);
          }
        }
        return arrayCopy;
    },

    flatten: function(collection, bol = false) {
      if(bol){
        return collection.flat()
      }else{
        return collection.flat(Infinity)
      }
    },

    uniq: function(collection, isSorted, callback = (x) => x ) {
      const uniqueCollection = [];

      for (const i of collection) {
        let counter = 0;
        for (const n of uniqueCollection) {
          if (callback(n) === callback(i)) {
            counter++;
          };
        };
        if (counter < 1) {
          uniqueCollection.push(i);
        };
      };

      return uniqueCollection;
    },

    keys: function(obj) {
      let arr = Object.keys(obj)
      arr.sort((a, b) => (a) - (b))
      return arr
    },

    values: function(obj) {
      let arr = Object.values(obj)
      arr.sort((a, b) => (a) - (b))
      return arr
    },

    functions: function(obj) {
      const result = [];

      for (const key in obj) {
        if (typeof obj[key] === 'function') result.push(key);
      }
      return result.sort();
    },
  }
})()

fi.libraryMethod() // returns the object we created above
