import { Certificate } from "crypto"

const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (coll, callback) {
    //  collection aka coll can be an object or array
    //  is coll an array or hash 
      // coll = collection
       let q = coll
      if (Array.isArray(q)) {
        for (let i = 0; i < q.length; i++){
          callback(q[i])
        }
          //object or array    
        return coll
        }
    else {
        let getValues = Object.values(q)
        for (let i = 0; i < getValues.length; i++){
          callback(getValues[i])
          }
        //object or array    
        return coll
      }
          
     
    },

    map: function (collection, callback) {
      
      if (!(collection instanceof Array)) {
        //  if it not an array , then it an object with values.
        collection = Object.values(collection)
      }

     const newArray = []
      for (let i = 0; i < collection.length; i++){
        newArray.push(callback(collection[i]))
      }
      return newArray
     },

  reduce: function( array, callback, acc) {
    // acc = acc ? acc : collection[0]
    // let totalBatteries = batteryBatches.reduce(
    //   function(accumulator, currentvalue){
    //  return accumulator + currentvalue}

    let collection = [...array];
    if (!acc) {
      acc = collection[0]
      collection.splice(0, 1)
      }
    
      acc 
       
          
      if (!(collection instanceof Array)) {
        //  if it not an array , then it an object with values.
        collection = Object.values(collection)
      }

     
    for (let i = 0; i < collection.length; i++){
      // collection[i] is the value of the current itereation.
      acc = callback(acc, collection[i], collection)  
           
      }
       return acc
    },

    // find: function (collections, predicate) {
    //  let checkCollection = collections.find(collection => collection === predicate)
    // },


    // filter: function () {
    
    // },


    // size: function () {
    
    // },


    // first: function () {
    
    // },


    // last: function () {
    
    // },


    // compact: function () {
    
    // },


    // sortby: function () {
    
    // },



    // flatten: function () {
    
    // },


    // uniq: function () {
    
    // },

    functions: function() {
      
    },


  }
})()

fi.libraryMethod()
