const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      // const collectionValues = Object.values(collection);
      // This passes the tests, but it contradicts the README.
      // for (const value of collectionValues) {
      //   callback(value);
      // }
      
      // const keysOrIndices = Object.keys(collection); // This works for Arrays AND Objects!
      // Though it may be cheating, since it uses a built-in function that I have to implement later.
      // Update: I figured out how to do it! But it may better to have a separate case for arrays and objects.
      
      // for (const keyOrIndex of keysOrIndices) {
      //   callback(collection[keyOrIndex], keyOrIndex, collection);
      // }
      
      // let i = 0; // Previous code
      // if (Array.isArray(collection)) {
      //   for (; i < collection.length; i++) {
      //     callback(collection[i], i, collection);
      //   }
      // } else {
      //   // Here, the collection is assumed to be a non-array Object.
      //   const collectionKeys = Object.keys(collection);
      //   for (; i < collectionKeys.length; i++) {
      //     callback(collection[collectionKeys[i]], collectionKeys[i], collection);
      //   }
      // }

      // This works for Objects and arrays (but be careful - it's not always straightforward with arrays):
      // And remember: "of" gets the values, but "in" gets the keys!
      for (const keyOrIndex in collection) {
        callback(collection[keyOrIndex], keyOrIndex, collection);
      }

      return collection;
    },

    map: function(collection, callback) {
      // const keysOrIndices = Object.keys(collection); // Again, I may need to write something else.
      const returnedArray = [];

      // for (const keyOrIndex of keysOrIndices) {
      for(const keyOrIndex in collection) {
        returnedArray.push( callback(collection[keyOrIndex], keyOrIndex, collection) );
      }

      return returnedArray;
    },

    reduce: function(collection, callback, acc) { // The collection is assumed to be an Array.
      let i;

      if (acc || acc === 0) { // Start the iteration at the first element, if the accumulator has an initial value.
        i = 0; // Oh, right. 0 is falsy in JS.
      } else {
        // Set the accumulator to the first element of the collection,
        // and start the iteration at the second element.
        i = 1;
        acc = collection[0];
      }

      for (; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }

      return acc;
    },

    find: function(collection, predicate) {
      // for (const value of collection) {
      //   if (predicate(value)) { return value; }
      // }

      for(const keyOrIndex in collection) { // This works for Objects AND Arrays (though it returns the value, not key/index).
        if( predicate(collection[keyOrIndex]) ) { return collection[keyOrIndex] }
      }
      // If it can't find a value that satisfies the predicate, return undefined (default).
    },

    filter: function(collection, callback) {
      let filteredArray = [];

      // for (const element of collection) {
      //   if (callback(element)) { filteredArray.push(element) }
      // }

      // For objects AND arrays:
      for (const keyOrIndex in collection) {
        if ( callback(collection[keyOrIndex]) ) { filteredArray.push(collection[keyOrIndex]) }
      }

      return filteredArray;
    },

    size: function(collection) {
      let counter = 0;

      // This may be the only way, without using Object.keys:
      // if (Array.isArray(collection)) {
      //   for (const element of collection) {
      //     counter++;
      //   }
      // } else { // The collection is a regular Object
      //   for (const value in collection) {
      //     counter++;
      //   }
      // }

      // Refactored (since for..in works on Objects AND Arrays):
      for (const keyOrIndex in collection) {
        counter++;
      }

      return counter;
    },

    first: function(array, n) {
      if (!n) {
        return array[0];
      }

      let firstNElements = [];

      // I added that second condition in the for loop 
      // to return just the entire array if n > array.length,
      // in order to avoid returning an array with a bunch of "undefined" values at the end.
      for(let i = 0; i < n && i < array.length; i++) {
        firstNElements.push(array[i]);
      }

      return firstNElements;
    },

    last: function(array, n) {
      // This may be cheating, but...
      if (n) {
        return array.slice(-n); // There are edge cases, but I'll ignore them for simplicity.
      }
      return array.slice(-1)[0];
    },

    compact: function(array) {
      let compacted = [];

      for (const element of array) {
        if (element) { compacted.push(element) }
      }
      
      return compacted;
    },

    sortBy: function(array, callback) { // Everything up to here works OK; continue from here.
      let sorted = [];

      for(const elem of array) {
        sorted.push(elem);
      }

      return sorted.sort((valA, valB) => callback(valA) - callback(valB));
    },

    flatten: function(array, shallow) { // We want to flatten this at least one level deep.
      let flattened = [];

      // for (const elem of array) {
      //   if( Array.isArray(elem) ) { // Flatten at the first level
      //     for (const nestedElem of elem) {
      //       if( !shallow && Array.isArray(nestedElem) ) {
      //         // Flatten this array to the innermost nested element
      //         const recursivelyFlattened = this.flatten(nestedElem);

      //         // Then push every element of the recursively flattened array into the original flattened array
      //         for(const furtherNested of recursivelyFlattened) {
      //           flattened.push(furtherNested);
      //         }
      //       } else { // Either this element isn't an array, or we only want to flatten one level deep
      //         flattened.push(nestedElem);
      //       } // End of inner if/else
      //     } // End of inner for loop 
      //   } else { // elem is not an array
      //     flattened.push(elem);
      //   } // End of outer if/else
      // } // End of outer for loop

      // Original attempt: 
      if (shallow) {
        for (const elem of array) {
          if (Array.isArray(elem)) {
            for(const nestedElem of elem) {
              flattened.push(nestedElem);
            }
          } else {
            flattened.push(elem);
          }
        }
      } else { // My first attempt at recursively calling a JS function from an Object; this might be better.
        for (const elem of array) {
          if (Array.isArray(elem)) {
            // for(const nestedElem of elem) {
            //   flattened.push(nestedElem);
            // }
            // flattened.push(this.flatten(elem, true)[0]);
            const recursivelyFlattened = this.flatten(elem);
            for(const nestedElem of recursivelyFlattened) {
              flattened.push(nestedElem);
            }
          } else {
            flattened.push(elem);
          }
        }
      }

      return flattened;
    },

    uniq: function(array, isSorted, callback) {

    },

    keys: function(obj) {
      let allKeys = [];
      for (const key in obj) { // I forgot that for..in operates on each KEY, not value!
        allKeys.push(key);
      }
      return allKeys; // I can use this to refactor the other methods above!
    },

    values: function(obj) {
      let allValues = [];
      for (const key in obj) {
        allValues.push(obj[key]);
      }
      return allValues;
    },

    functions: function(obj) {
      // I think I just need to use the typeof operator!
      let sortedFunctionNames = [];

      for (const key in obj) {
        if (typeof obj[key] === 'function') {
          sortedFunctionNames.push(key);
        }
      }

      return sortedFunctionNames.sort();
    }
  }
})()

fi.libraryMethod()
