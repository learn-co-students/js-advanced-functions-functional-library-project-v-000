const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, call) {

      if (Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
          call(collection[i])
        }
      }else {
        let v = Object.values(collection)
        for(let i = 0; i < v.length; i++){
          call(v[i])
        }
      }

      return collection
    },

    map: function(collection, call) {

      let n = []

      if (Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
          n.push(call(collection[i]))
        }
      }else {
        let v = Object.values(collection)
        for(let i = 0; i < v.length; i++){
          n.push(call(v[i]))
        }
      }

      return n

    },

    reduce: function(collection, call, acc = -2) {

      for(let i = 0; i < collection.length; i++){
          acc = call(acc, collection[i], collection)
        }

      return acc
    },

    find: function(collection, predicate) {

      let ret = ""
      for(let i = 0; i < collection.length; i++){
          if(predicate(collection[i])){
            return collection[i]
          }
        }
    },

    filter: function(collection, predicate) {
      let arr = []

      for(let i = 0; i < collection.length; i++){
          if(predicate(collection[i])){
            arr.push(collection[i])
          }
        }

        return arr
    },

    size: function(collection) {

      if (Array.isArray(collection)){
        return collection.length
      }else {
        let v = Object.keys(collection)
        return v.length
      }
    },

    first: function(collection, num = 0) {
      if(num === 0) {
        return collection[0]
      }else{
        return collection.slice(0, num)
      }
    },

    last: function(collection, num = 0) {
      if(num === 0) {
        return collection[collection.length-1]
      }else{
        return collection.slice(collection.length - num)
      }
    },

    compact: function(collection){
      let arr = []
      for(let i = 0; i < collection.length; i++){
        if (!!collection[i]) {
          arr.push(collection[i])
        }
      }
      return arr
    },

    sortBy: function(collection, call){
      let arr = collection.slice()
      arr.sort((a, b) => call(a) - call(b))
      //arr.sort(call)
      //return arr.sort((a, b) => a - b)
      return arr
    },

    flatten: function(collection, bol = false) {
      if(bol){
        return collection.flat()
      }else{
        return collection.flat(Infinity)
      }
    },

    uniq: function(collection = [], bol = false, cal = 0){
      let arr = []

      if(cal !== 0){
        for(let i = 0; i < collection.length; i++){
          arr.push(cal(collection[i]))
        }
      }

      if(bol){
        return [...new Set(arr)]
      }else{
        arr.sort((a, b) => (a) - (b))
        return [...new Set(arr)]
      }

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
      let arr = Object.getOwnPropertyNames(obj).filter(item => typeof(obj[item]) === 'function')
      let arr1 = Object.keys(arr)
      arr1.sort((a, b) => (a) - (b))
      return arr1
    }
}})()

//fi.libraryMethod()
