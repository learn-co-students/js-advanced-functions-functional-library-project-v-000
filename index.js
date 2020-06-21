const { spy } = require("chai")

const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by rceading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    // each: function() {
    each: function(testArr) {
      // console.log("testArr", testArr)
      // testArr [ 1, 2, 3, 4 ]
      // [Function (anonymous)] {
      //   toString: [Function: toString],
      //   __spy: { calls: [], called: false, name: undefined },
      //   reset: [Function (anonymous)]
      // }
      //fi.each([ 1, 2, 3, 4 ], alert); // ReferenceError: fi is not defined
      // fi.each([collection], alert) // ReferenceError: fi is not defined
      // fi.each() // ReferenceError: fi is not defined
      fi.each(testArr, alert);
      

   
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
