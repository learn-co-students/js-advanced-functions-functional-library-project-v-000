const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = collection instanceof Array ? collection.slice() : Object.values(collection)

      for(let idx = 0; idx < newCollection.length; idx++) {
        callback(newCollection[idx])
      }

      return collection
    },

    map: function(collection, callback) {
      if(!(collection instanceof Array)) {
        collection = Object.values(collection)
      }

      const newArray = []

      for(let idx = 0; idx < collection.length; idx ++) {
        newArray.push(callback(collection[idx]))
      }

      return newArray

    },

    reduce: function(collection, callback, acc) {
      let newCollection = collection.slice()

      if(!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
      }

      for(let idx = 0; idx < newCollection.length; idx++) {
        acc = callback(acc, newCollection[idx], newCollection)
      }

      return acc
    },

    find: function(collection, predicate) {
      for(let idx = 0; idx < collection.length; idx++) {
        if(predicate(collection[idx])) {
          return collection[idx]
        }
      }
    },

    filter: function(collection, predicate) {
      let newArray = []

      for(let idx = 0; idx < collection.length; idx++) {
        if(predicate(collection[idx])) {
          newArray.push(collection[idx])
        }
      }

      return newArray
    },

    size: function(collection) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }

      return collection.length
    },

    first: function(array, n) {
      if(!n) {
        return array[0]
      }

      let newArray = array.slice(0, n)

      return newArray
    },

    last: function(array, n) {
      if(!n) {
        return array.slice(-1)[0]
      }

      let newArray = array.slice(-n)

      return newArray
    },

    compact: function(array) {
      let newArray = []

      for(let idx = 0; idx < array.length; idx++) {
        if(!!array[idx]) {
          newArray.push(array[idx])
        }
      }

      return newArray
    },

    sortBy: function(collection, callback) {
      const newCollection = collection instanceof Array ? collection.slice() : Object.values(collection)

      return newCollection.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr) {
        receiver.push(val)
      }
    },

    flatten: function(collection, shallow, newArr=[]) {
      // let newCollection = []
      //
      // if(shallow) {
      //   for(let val of collection) {
      //     val instanceof Array ? newCollection = newCollection.concat(...val) : newCollection.push(val)
      //   }
      // } else {
      //   for(let val of collection) {
      //     val instanceof Array ? newCollection = newCollection.concat(...val) : newCollection.push(val)
      //   }
      // }
      //
      //
      // return newCollection
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

      // for (let val of collection) {
      //   (val instanceof Array) ? newCollection.concat.apply([], val) : newCollection.push(val)
      // }
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        const sortedArray = [collection[0]]
        for (let idx = 1; idx < collection.length; idx++) {
          if (sortedArray[idx-1] !== collection[idx])
            sortedArray.push(collection[idx])
        }
        return sortedArray
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

    keys: function(object) {
      const keys = Object.keys(object)
      return keys
    },

    values: function(object) {
      const values = Object.values(object)
      return values
    },

    functions: function(object) {
      const names = []

      for (let key in object) {
        if (typeof object[key] === "function"){
          names.push(key)
        }
      }

      return names.sort()

    },


  }
})()

fi.libraryMethod()
