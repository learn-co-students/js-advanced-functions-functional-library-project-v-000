const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    // 1) calls alert with each element passed
    // 2) calls alert properly on object values
    // 3) returns the original collection
    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        collection.forEach(element => 
          callback(element)
        );
      } else { // collection is an Object
        for (const key in collection) {
          if (collection.hasOwnProperty(key)) {
            const element = collection[key];
            callback(element)
          }
        }
      }
      return collection
    },

    // 1) successfully returns a correctly populated array
    // // does not modify the original array
    //  2) successfully returns a correctly populated array from modified object values
    //  // does not modify the original object
    map: function(collection, callback) {
      let newCollection = []

      if (Array.isArray(collection)) {
        collection.forEach(element => 
          newCollection.push(callback(element))
        );
      } else { // collection is an Object
        for (const key in collection) {
          if (collection.hasOwnProperty(key)) {
            const element = collection[key];
            newCollection.push(callback(element))
          }
        }
      }
      return newCollection
    },

    // 1) returns the correct reduced value when passed an initial value
    // 2) returns the correct reduced value when not passed an initial value
    // 3) does not modify the original array
    reduce: function(collection, callback, acc) {
      let total = (!!acc) ? acc : collection[0]
      let i = (!!acc) ? 0 : 1

      for (; i < collection.length; i++) {
        total = callback(total, collection[i], collection)
      }
      return total
    },

    // Looks through each value in the collection, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. 
    // The function returns as soon as it finds an acceptable element, and doesn't traverse the entire collection.
    find: function(collection, predicate) {
      // if collection is an object, make values an array
      if (!(Array.isArray(collection))) {
        collection = Object.values(collection)
      }
      // iterate over collection array until predicate true
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    // Looks through each value in the collection, returning an array of all the values that pass a truth test (predicate).
    // 1) correctly filters for values that the callback evaluates as true
    filter: function(collection, predicate) {
      let truthValues = []
      // if collection is an object, make values an array
      if (!(Array.isArray(collection))) {
        collection = Object.values(collection)
      }
      // iterate over collection array and push predicate(collection[i]) values into new array
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          truthValues.push(collection[i])
        }
      }
      // return array of all the values that pass truth test (predicate)
      return truthValues
    },

    // Return the number of values in the collection
    // 1) correctly returns the size of the collection when an array is passed
    // 2) correctly returns the size of the collection (amount of keys) when an object is passed
    size: function(collection) {
      // if collection is an object, make values an array
      if (!(Array.isArray(collection))) {
        collection = Object.values(collection)
      }
      // Return the number of values in the collection
      return collection.length
    },

    // Returns the first element of an array. 
    // Passing n will return the first n elements of the array.
    // 1) returns the first element of the collection
    // 2) returns the first n elements of the collection when the second optional argument (n) is provided
    first: function(array, num) {
      let n = (!!num) ? num : 1
      let nArray = array.slice(0, n)

      return (!!num) ? nArray : nArray[0]
    },

    // Returns the last element of an array. Passing n will return the last n elements of the array.
    // 1) returns the last element of the collection
    // 2) returns the last n elements of the collection when the second optional argument (n) is provided
    last: function(array, num) {
      let n = (!!num) ? -num : -1
      let nArray = array.slice(n)

      return (!!num) ? nArray : nArray[0]
    },

    // Returns a copy of the array with all falsy values removed. 
    // In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
    compact: function(array) {
      let compactArray = []

      for (const i of array) {
        if (!!i) {
          compactArray.push(i)
        }
      }
      return compactArray
    },

    // Returns a sorted copy of array, ranked in ascending order by the results of running each value through callback. 
    // The values from the original array should be retained within the sorted copy, just in ascending order.
    // 1) correctly sorts arrays of integers and arrays of strings
    // 2) does not modify the original arrays
    // 3) correctly sorts arrays of integers with non-standard sort
    sortBy: function(array, callback) {
      let sortedArray = [...array]

      return sortedArray.sort(function(a,b) {
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
   
    // Produces a duplicate-free version of the array, using === to test object equality. 
    // In particular only the first occurrence of each value is kept.
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
    // Retrieve all the names of the object's own enumerable properties.
    keys: function(object) {
      let keysArray = []

      for (const key in object) {
        keysArray.push(key) 
      }

      return keysArray
    },

    // Return all of the values of the object's own properties
    values: function(object) {
      let valuesArray = []

      for (const key in object) {
        valuesArray.push(object[key]) 
      }

      return valuesArray
    },

    // returns a sorted collection of the names of every method in an object
    functions: function(object) {
      let sortedArray = []
      
      for (const key in object) {
        if (typeof object[key] === 'function') {
          sortedArray.push(key)
        }
      }
      
      return sortedArray.sort()
    },
  }
})()

fi.libraryMethod()
