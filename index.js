// import { Certificate } from "crypto"

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

  //  Goal of this function is you want it tobe able to handle what every you throw at tit. 
    find: function (collections, predicate) {

      if (!(collections instanceof Array)) {
        collections = Object.values(collections)
      }
      for (let i = 0; i < collections.length; i++){
        if (predicate(collections[i]))
          return collections[i]
            
        }
         return undefined
        
    },
     

    filter: function (collection, predicate) {

      let emptyArray = []

      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }
      for (let i = 0; i < collection.length; i++)
      
    if (predicate(collection[i])) emptyArray.push(collection[i])
      return emptyArray
    },


    size: function (collection) {
    
      return (collection instanceof Array) ? collection.length : Object.keys(collection).length
    
    },


    first: function (collection, n = false) {
      // n is false by default.
      return n ? collection.slice(0,n) :  collection[0]
    },


    last: function (collection, n = false) {
      //  you want it to show that last n value put in . So if you say N should be 2
      //  it gonna only show the last 2 element in the collection
      return n ? collection.slice(collection.length - n , collection.length) :  collection[collection.length-1]

    },


    compact: function (list) {
      const noGood = new Set ([false, null, 0, "", undefined, NaN])
      
      return list.filter( obj => !noGood.has(obj));
    },


    sortBy: function (collection, callback) {
       
      let newSort = [...collection]
      return newSort.sort(function (a, b) {
        // ranked in ascending order by the results of running each value through callback.
        // The values from the original
        // array should be retained within the sorted copy, just in ascending order.
          return callback(a) - callback(b)
        })
    },

  


    // flatten: function (array, n = true) {
    //   let newArray = [...array]
    //   return newArray.flatten()
    // },


    uniq: function (sampleValues) {
    const uniqueValues = [...new Set(sampleValues)]; 
      // console.log(uniqueValues);
      return uniqueValues
    
    },

    functions: function() {
      
    },


  }
})()

fi.libraryMethod()
