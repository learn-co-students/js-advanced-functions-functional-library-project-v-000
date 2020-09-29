const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let arrayOfValues = (collection instanceof Array) ? collection.slice(): Object.values(collection)
      for(let i = 0; i < arrayOfValues.length; i++){
        callback(arrayOfValues[i])
      }
      return collection
    },

    map: function(collection, callback) {
      let arrayOfValues = (collection instanceof Array) ? collection.slice(): Object.values(collection)
      let mapArray = []
      arrayOfValues.forEach(index => mapArray.push(callback(index)));
      return mapArray
    },

    reduce: function(collection, callback, acc) {
      if (acc == undefined){
        let ans = collection[0]
        for(let i = 1; i < collection.length; i++){
          ans = callback(ans, collection[i])
        }
        return ans
      }
      else {
        collection.forEach(function(value){
          acc = callback(acc, value)
        })
        return acc
      }
    },

    find: function(collection, predicate) {
      let arrayOfValues = (collection instanceof Array) ? collection.slice(): Object.values(collection)
      let ans = undefined
      let i = 0
      while(i < arrayOfValues.length){
        if (predicate(arrayOfValues[i])){
          ans = arrayOfValues[i]
          i = arrayOfValues.length
        }
        i++
      }
      return ans
    },

    filter: function(collection, predicate) {
      let arrayOfValues = (collection instanceof Array) ? collection.slice(): Object.values(collection)
      let ans = []
      for(let index in arrayOfValues){
        if(predicate(arrayOfValues[index])){
          ans.push(arrayOfValues[index])
        }
      }
      return ans
    },

    size: function(collection) {
      return ((collection instanceof Array) ? collection.slice(): Object.values(collection)).length
    },

    first: function(array, n) {
      let ans = 0
      if (n == undefined){
        ans = array.slice()[0]
      }
      else{
        ans = array.slice(0, n)
      }
      return ans
    },

    last: function(array, n) {
      let ans = 0
      let lastIndex = array.length-1
      if (n == undefined){
        ans = array.slice()[lastIndex]
      }
      else{
        ans = array.slice((lastIndex-n)+1)
      }
      return ans
    },

    compact: function(array) {
      let ans = array.filter(element => Boolean(element) == true)
      return ans
    },

    sortBy: function(array, callback) {

      // let placeholder = []
      // for(let i = 0; i < array.length; i++){
      //   placeholder.push(callback(array[i]))
      // }
      // placeholder.sort()
      //
      // return placeholder

      // var points = [40, 100, 1, 5, 25, 10];
      // points.sort(function(a, b){return b - a});

      let placeholder = array.slice()
console.log("placeholder= ", placeholder)
      placeholder.sort(callback())
console.log("placeholder= ", placeholder)
      return placeholder

    },

    flatten: function(array, shallow) {

    },

    uniq: function(array, isSorted, callback) {

    },

    keys: function(object) {

    },

    values: function(object) {

    },

    functions: function(object) {

    },

  }
})()

fi.libraryMethod()
