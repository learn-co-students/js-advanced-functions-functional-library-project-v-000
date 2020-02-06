const alertFn = (function(element){
 //Object.values(element) ? alert(Object.values(element)) : alert(element)
  //!!element[key] ?  alert(Object.values(element)) : alert(element)
  //alert(Object.values(element));
 alert(element)
  //for (let key in element) {
  //alert(key, yourobject[key]);
})()


const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

//even with the correct solutions here, i get the error "TypeError: Object.values is not a function" Something with my Mocha? I think an issue with Mocha//Chai. Test harness was updated 5 months ago on this lab 
//solution one - https://github.com/rcho100/js-advanced-functions-functional-library-project-v-000/blob/master/index.js
    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], [i], collection);
        }
      } else {
        for (const key in collection) {
          callback(collection[key], key, collection);
        }
      }
      return collection
    },
//solution two -https://github.com/learn-co-students/js-advanced-functions-functional-library-project-v-000/blob/solution/index.js
// each: function(collection, iteratee) {
// const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
//
// for (let idx = 0; idx < newCollection.length; idx++)
//   iteratee(newCollection[idx])
//
// return collection
// },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
