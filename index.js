const fi = (function() {  //wrap entire library in IIFE
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array1, callback) {
    if (Array.isArray(array1)) {
      for (let i = 0; i < array1.length; i++) {
        let a = array1[i]
        callback(a, i, array1)
      }
    }
    else {
       let keys = Object.keys(array1)
      for (let i = 0; i < keys.length; i++) {
        let k = keys[i]
        let v = array1[k]
        callback(v, k, array1)
      }
    }
    return array1 
  },


    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
