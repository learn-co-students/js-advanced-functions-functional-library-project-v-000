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


    reduce: function(col, callback, acc = -2) {
     let myAcc = acc;
       for (let i = 0; i < col.length; i++) {
        myAcc = callback(myAcc, col[i], col)  //returns value times three plus acc 
      }
      return myAcc 
    },

    find: function(collection, predicate) {  //return first one passing predicate test or undefined if nothing passes 
      for (let i = 0; i < collection.length; i++) {   //check if first element passes predicate test 
       if (predicate(collection[i])) {                    //if does not pass grab next element and check, repeat
          return collection[i] 
          break                                //if it does pass, return that element value 
      }
     }
    },

    filter: function(collection, predicate) {
    let newArray = []
     for (let i = 0; i < collection.length; i++) {
      if(predicate(collection[i])) {
        newArray.push(collection[i])
      }
     }
     return newArray
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length
      } else if (typeof(collection) === 'object') {
        return Object.keys(collection).length
      }
    },


    functions: function() {

    },


  }
})()

fi.libraryMethod()
