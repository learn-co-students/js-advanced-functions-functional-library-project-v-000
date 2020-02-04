const fi = (function() {
  return {
    // To get the return value type:
    // fi.libraryMethod()
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iterations) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let item = 0; item < newCollection.length; item++)
        iterations(newCollection[item])

      return collection
    },

    map: function(collection, iterations) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const myArray = []

      for (let item = 0; item < collection.length; item++)
        myArray.push(iterations(collection[item]))

      return myArray
    },


		reduce: function(c = [], callback = () => {}, acc) {
			let collection = c.slice(0)

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}

			let len = collection.length;

			for (let i = 0; i < len; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
		},

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      for (let item = 0; item < collection.length; item++)
        if (predicate(collection[item])) return collection[item]

      return undefined
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const myArray = []

      for (let item = 0; item < collection.length; item++)
        if (predicate(collection[item])) myArray.push(collection[item])

      return myArray
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    },

    first: function(collection, stop=false) {
      return (stop) ? collection.slice(0, stop) : collection[0]
    },

    last: function(collection, start=false) {
      return (start) ? collection.slice(collection.length-start, collection.length) : collection[collection.length-1]
    },

    compact: function(collection) {
      const badBad = new Set([false, null, 0, "", undefined, NaN])
      return collection.filter(el => !badBad.has(el))
    },

    sortBy: function(collection, callback) {
      const myArray = [...collection]
      return myArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, myArray=[]) {
      if (!Array.isArray(collection)) return myArray.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(myArray, val) : myArray.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, myArray)
        }
      }
      return myArray
    },

    uniqSorted: function(collection, iterations) {
      const sorted = [collection[0]]
      for (let item = 1; item < collection.length; item++) {
        if (sorted[item-1] !== collection[item])
          sorted.push(collection[item])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iterations=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iterations)
      } else if (!iterations) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iterations(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      // Using for loop
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      // Using for loop
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
