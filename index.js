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


    map: function(collection, callback) {
      let newCollection = []
      if (Array.isArray(collection)) {
          for (let i = 0; i < collection.length; i++) {
        let a = collection[i]
        newCollection.push(callback(a, i, collection)) 
      }
    }
      else {
       let keys = Object.keys(collection)
      for (let i = 0; i < keys.length; i++) {
        let k = keys[i]
        let v = collection[k]
        newCollection.push(callback(v, k, collection))
      }
    }
      return newCollection 
    },


    reduce: function(col, callback = () => {}, acc = -2) {
     let myAcc = acc;
       for (let i = 0; i < col.length; i++) {
        myAcc = callback(myAcc, col[i], col)  //returns value times three plus acc 
      }
      return myAcc 
    },

    functions: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (collection == undefined) {
          
        }
    },


  }
})()

fi.libraryMethod()
