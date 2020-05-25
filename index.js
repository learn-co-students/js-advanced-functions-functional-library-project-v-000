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

    sortBy: function(array, callback) { // This also works Arrays of Objects with numerical values.
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
      if (shallow) { // We only want to flatten the first level of the array.
        for (const elem of array) {
          if (Array.isArray(elem)) {
            // If the element on the top level is an array,
            // then push its elements into the flattened array.
            for(const nestedElem of elem) {
              flattened.push(nestedElem);
            }
          } else {
            flattened.push(elem);
          }
        }
      } else { // We want to flatten the array all the way to the innermost nested level.
        // My first attempt at recursively calling a JS function from an Object; this might be better.
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
      // If typeof element === 'object', I have to use a different comparison.
      // function equalObjects(objA, objB) { // This whole thing is incomplete.
      //   const [objAKeys, objBKeys] = [this.keys(objA), this.keys(objB)];

      //   if (this.size(objA) !== this.size(objB)) {
      //     return false;
      //   } else {
      //     for (const key in objA) {
      //       if(!this.find(objBKeys, ))
      //     }
      //   }
      // } 
      // Update: Trying to compare objects is too complicated for this.
      // objA only === objB if they both POINT to the same Object (i.e., set objB = objA).
      // {abc: 123} === {abc: 123} returns FALSE.
      // Since the tests already have two objects with the same reference, I will use === for simplicity.
      
      function isInArray(value, arr) {
        for (const arrValue of arr) {
          if(value === arrValue) { return true; }
        }
        return false;
      }

      let currentValue = array[0];
      let uniqueArray = [currentValue]; // Always start with the first element of the array
      let remainingArray = array.slice(1);

      // Note: I don't know how to refactor the similar lines of code without ruining the faster algorithm for isSorted.

      if(callback) {
        // In both cases (sorted and unsorted), I have to make sure that each value of the uniqueArray
        // corresponds to a unique return value of the callback. No two elements should have the same callback return value.
        let uniqueReturnValues = [callback(currentValue)];

        if(isSorted) { // Technically extra; this is in the Readme, but not the tests.
          // Since the array is sorted, any equal values will be side-by-side.
          // So, if a value in the remainingArray !== currentValue, it has yet to be added to the uniqueArray.
          for(const value of remainingArray) {
            const returnedValue = callback(value);

            if(value !== currentValue && !isInArray(returnedValue, uniqueReturnValues)) {
              uniqueReturnValues.push(returnedValue);
              uniqueArray.push(value);
              currentValue = value;
            }
          }
        } else { // Not sorted
          for(const value of remainingArray) {
            const returnedValue = callback(value);

            if(!isInArray(returnedValue, uniqueReturnValues)) {
              uniqueReturnValues.push(returnedValue);
              uniqueArray.push(value);
            }
          }
        } // End of "if (isSorted)"
      } else if (isSorted) { // No callback, but the array is sorted.
        for(const value of remainingArray) {
          if(value !== currentValue) {
            uniqueArray.push(value);
            currentValue = value;
          }
        }
      } else { // The array is not sorted, and there is no callback.
        for(const value of remainingArray) {
          if(!isInArray(value, uniqueArray)) { uniqueArray.push(value); }
        }
      }

      return uniqueArray;
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
