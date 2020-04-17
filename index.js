const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(src, callback) {
      if (Array.isArray(src)) {
        for (let e of src) {
          callback()
        }
      } else {
        for (const element in src) {
          callback(src[element])
        }
      }
      return src
    },

    map: function(src, callback) {
      let newSrc = []
      if (Array.isArray(src)) {
        for (let e of src) {
          newSrc.push(callback(e))
        }
      } else {
        for (const element in src) {
          newSrc.push(callback(src[element]))
        }
      }
      return newSrc;
    },

    reduce: function(src, callback, acc) {
      let total
      let otherTotal = 0

      if (!!acc) {
        total = acc
        for (let element of src) {
          let amount = callback(total, element)
          total = amount
        }
      } else {
        let sliced = src.slice()
        let initial = parseInt(sliced.splice(0, 1), 10)
        for (let item of sliced) {
          initial = callback(initial, item)
        }
        return initial
      }
      return total
    },

    find: function(src, predicate) {
      for (let item of src) {
        if (predicate(item)) {
          return item
        }
      }
      return undefined;
    },

    filter: function(src, predicate) {
      let passed = []
      for (let item of src) {
        if (predicate(item)) {
          passed.push(item)
        }
      }
      return passed;
    },

    size: function(src) {
      let count = []
      for (const key in src) {
        count.push(src[key])
      }
      return count.length
    },

    first: function(array, n) {
      if (n) {
        return array.slice(0, n)
      }
      return array[0]
    },

    last: function(array, n) {
      if (n) {
        return array.slice([-n])
      }
      return array.slice(-1)[0]
    },

    compact: function(array) {
      let truthy = array.filter(element => !!element)
      return truthy
    },

    sortBy: function(array, cb) {
      let copy = [...array]
      return copy.sort((a, b) => (cb(a) - cb(b)))
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

      // Using the custom 'map' method from above
      // return this.map(obj, (value) => value)

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
