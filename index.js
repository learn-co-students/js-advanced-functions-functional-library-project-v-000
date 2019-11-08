const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, cb) {
      const valsArr = Object.values(arr)
      let i
      for (i = 0; i < valsArr.length; i++) {
        cb(valsArr[i])
      }
      return arr
    },

    map: function(arr, cb) {
      const valsArr = Object.values(arr)
      let i
      let newArr = []
      for (i = 0; i < valsArr.length; i++) {
        newArr.push(cb(valsArr[i]))
      }
      return newArr
    },

    reduce: function(arr, cb, acc = 0) {
      let i
      for (i = 0; i < arr.length; i++) {
        const newVal = cb(acc, arr[i], arr)
        acc = newVal
      }
      return acc
    },

    find: function(arr, cb) {
      let i = 0
      let returnVal
      while (i < arr.length) {
        if (cb(arr[i]) === true) {
          returnVal = arr[i]
          break
        } else {
          i++
        }
      }
      return returnVal
    },

    filter: function(arr, cb) {
      let newArr = []
      let i

      for (i = 0; i < arr.length; i++) {
        if (cb(arr[i]) === true) {
          newArr.push(arr[i])
        }
      }

      return newArr
    },

    size: function(arr) {
      const testArr = Object.values(arr)
      return testArr.length
    },

    first: function(arr, n = 0) {
      if (n === 0) {
        return arr[0]
      } else {
        return arr.slice(0, n)
      }
    },

    last: function(arr, n = 0) {
      if (n === 0) {
        return arr.slice(-1)[0]
      } else {
        let i = `-${n}`
        return arr.slice(parseInt(i))
      }
    },

    compact: function(arr) {
      const newArr = []
      let i
      for ( i = 0; i < arr.length; i++) {
        if (arr[i]) {
          newArr.push(arr[i])
        }
      }
      return newArr
    },

    sortBy: function(arr, cb) {
      const newArr = [...arr]
      newArr.sort((a, b) => { return cb(a) - cb(b) })

      return newArr
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(arr, shallow, newArr = []) {
      if (!Array.isArray(arr)) return newArr.push(arr)
      if (shallow) {
        for (let val of arr)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of arr) {
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
