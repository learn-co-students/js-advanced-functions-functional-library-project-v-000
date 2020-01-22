const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newColl = (Array.isArray(collection)) ? collection : Object.values(collection) //check to see if collection argument is an array/ if array coll is passed if object pulls values from object creating array/ set to constant newColl
        for (let i = 0; i < newColl.length; i++) // loop through newColl until collection length reached
        callback(newColl[i]) // collection is passed into callback function at it's index
      return collection // orginal collection returned
    },

    map: function(collection, callback) {
     const newColl = (Array.isArray(collection)) ? collection : Object.values(collection) // //check to see if collection argument is an array/ if array coll is passed if object pulls values from object creating array/ set to constant newColl

      const newArr = [] // newArr constant set to an empty array

      for (let i = 0; i < newColl.length; i++)// loop through newColl until collection length reached
       newArr.push(callback(newColl[i])) // collection is passed into callback function at it's index and pushed into newArr creating new array

      return newArr // newArr is returned
    },

    reduce: function(c = [], callback = () => {}, acc) {
			let collection = c.slice(0) // start from 0 index and extract array

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)//if there is not an acc, start acc from 0 index of collection then extract array from starting from index 1
			}// now should be able to return correct reduce value when not passed accumulator

			let newColl = collection.length; // set len to length of current collection

			for (let i = 0; i < newColl; i++) { //// loop through newColl
				acc = callback(acc, collection[i], collection) // set acc to callback function
			}
			return acc;// return acc
		},

    find: function(collection, predicate){

      if (!(collection instanceof Array))
        collection = Object.values(collection)// if collection is an object, values are extracted and turned into an array

      for (let i = 0; i < collection.length; i++)// loop through collection until length reached
        if (predicate(collection[i])) return collection[i] // return element if predicate(element) is true

      return undefined// return undefined if predicate(element) is false
    },


    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)// if collection is an object, values are extracted and turned into an array

      const newArr = [] //newArr set to empty array

      for (let i = 0; i < collection.length; i++)// loop through collection until length reached
        if (predicate(collection[i])) newArr.push(collection[i]) // if predicate(element) is true push element into newArr

      return newArr //return newArr
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
      // if array return length of giving collection, if object extract keys and turn into array, return length of extracted keys
    },

    first: function(collection, n=false) {
      return (n) ? collection.slice(0, n) : collection[0]
      //  if given n return the given number of elements in collection, else return element with index of 0 (first element)
    },

    last: function(collection, n=false) {
      return (n) ? collection.slice(collection.length - n, collection.length) : collection[collection.length-1]
      //if given n return extracted elements starting from equation above  and ending before collection length, else return element with index of outcome of equation
    },

    compact: function(collection) {
      const badArr = new Set([false, null, 0, "", undefined, NaN]) // set badArr to new set of elements
      return collection.filter(el => !badArr.has(el)) // filter through badArr and check to see if it does not have element
    },

    sortBy: function(collection, callback) {
      const newArr = [...collection] // set newArra to array with spread operator of collection
      return newArr.sort(function(a, b) { //sorts newArr and compares given arguments
        return callback(a) - callback(b) // subtract b from a to compare numbers, return array in ascending order
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr) // iterate through array and set elements to val
        receiver.push(val)// push val into array
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection) // if collection is not an array push collection into newArr
      if (shallow) {
        for (let val of collection) //if shallow iterate through collection and set elements to val
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val) //if val is an array pass newArr & val to unpack function to current object, else push val into newArr
      } else {
        for (let val of collection) { ////if shallow iterate through collection and set elements to val
          this.flatten(val, false, newArr) // flatten object with passed in arguments of val, false , and newArr
        }
      }
      return newArr
    },

    uniqSorted: function(collection, callback) {
      const sorted = [collection[0]] // set collection at index 0 to sorted
      for (let i = 1; i < collection.length; i++) {
        if (sorted[i-1] !== collection[i])
          sorted.push(collection[i])
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

      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {

      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values



    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()
