const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      for (const c in collection){
        alert(collection[c])
      }
      return collection
    },

    map: function(collection, callback) {
      let array = []; 
      for (const c in collection) {
        array.push(callback(collection[c]))
      }
      return array
    },

    // reduce: function(collection, callback, acc = 0) {
    //   let b = acc
    //   for (const i of collection){
    //     b = callback(b, i, collection)
    //   }
    //   return b
    // },

    find: function(collection, predicate) {
      for (const c in collection) {
        if(predicate(collection[c]) === true) {
          return collection[c]
        }
      }
    },

    filter: function(collection, predicate) {
      const newArray = []
      for (const c in collection) {
        if(predicate(collection[c]) === true) {
          newArray.push(collection[c])
        }
      }
      return newArray
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(array, n) {
      const newArr = []
      if (n === undefined) {
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n) {
      const newArr = []
      if (n === undefined) {
        return array[array.length-1]
      } else {
        return array.slice(array.length - n)
      }
    },

    compact: function(array) {
      const newArr = []
      for (const i in array){
        if (array[i]) {
          newArr.push(array[i])
        }
      }
      return newArr
    },

    sortBy: function(arr, iteratee){
      return [...arr].sort(function(a,b) {return iteratee(a) - iteratee(b)})
    },

    flatten: function flatten(array, shallow){
      let newArr = []
      for(var i in array){
        if (shallow === true){
          if(Array.isArray(array[i])) {
              newArr = newArr.concat(array[i])
          } else {
              newArr.push(array[i])
          }
        }
        else {
          if(Array.isArray(array[i])) {
              newArr = newArr.concat(flatten(array[i]))
          } else {
              newArr.push(array[i])
          }
        }
      }
      return newArr
    },

    // uniq: function(list){
    //   let newArr = []
    //   for(var i in list){
    //     if (newArr.includes(list[i]) === false){
    //       newArr.push(list[i])
    //     }
    //   }
    //   return newArr
    // },
 
    keys: function(obj) {
      return Object.keys(obj)
    },
 
    values: function(obj) {
      return Object.values(obj)
    },
 
 
     functions: function(fi) {
       let newArr = []
        for(var i in fi){
          if(typeof fi[i] == "function" ){
          newArr.push(fi[i])
          }
        }
      newArr.sort()
      return newArr
    },
 


  }
})()

fi.libraryMethod()
