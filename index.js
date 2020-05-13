const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callBack) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      
      for (let i=0; i<newCollection.length; i++) {
        callBack(newCollection[i]);
      }
      return collection;

    },

    map: function(collection, callback) {
      let valuesCollection = (collection instanceof Array) ? collection : Object.values(collection)

      const newCollection = []

      for (let i = 0; i < valuesCollection.length; i++){
          newCollection.push(callback(valuesCollection[i]))
    }

    return newCollection;
    },

    reduce: function(collection, callback, accumulator) {
      let valuesCollection = (collection instanceof Array) ? collection : Object.values(collection)

      if (!accumulator) {
        accumulator = valuesCollection[0]
        valuesCollection =  valuesCollection.slice(1);
      }
      

      for (let i=0; i < valuesCollection.length; i++) {
        accumulator = callback(accumulator, valuesCollection[i], valuesCollection)
      }

      return accumulator;

    },

    // returning the first one that passes a truth test (predicate),
    find: function(collection, predicate){
      let valuesCollection = (collection instanceof Array) ? collection : Object.values(collection)

      for (let i=0; i < valuesCollection.length; i++) {
        if (!!predicate(valuesCollection[i])) {
          return valuesCollection[i];
        }

      }
    },

    filter: function(collection, predicate){
      let valuesCollection = (collection instanceof Array) ? collection : Object.values(collection)

      let results = []

      for (let i=0; i < valuesCollection.length; i++) {
        if (!!predicate(valuesCollection[i])) {
          results.push(valuesCollection[i])
        }      
      }
      return results
    },


    size: function(collection){
      let valuesCollection = (collection instanceof Array) ? collection : Object.values(collection)

      return valuesCollection.length

    },

    //Passing n will return the first n elements of the array.
    first: function(array, n){
      //let valuesCollection = (collection instanceof Array) ? collection : Object.values(collection)
      
      if (!!n) {
        let numberOfElements = n
        return array.slice(0, numberOfElements)
      }
      else {return array[0]}
    
    },

    last: function(array, n){
      if (!!n) {
        let numberOfElements = -(n)
        return array.slice(numberOfElements)
      }
      else {return array[array.length-1]}
    }, 

    compact: function(array){
      let trueArray = []
      for (let i=0; i < array.length; i++) {
        if (!!array[i]){
          trueArray.push(array[i])
        }
      }
      return trueArray
    }, 


    sortBy: function(array, callback){
      const newArray = [...array];

        return newArray.sort(function(a, b) {
            return callback(a) - callback(b)
        })

    },


    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      const keys = [];
      for(let key in obj) {
        keys.push(key);
      }
      return keys;
    },

    values: function(obj) {
      const values = [];
      for(let value in obj) {
        values.push(obj[value])
      }

      return values;
    },

    functions: function(obj) {
      const functionNames = []
  
        for (let key in obj) {
          if (typeof obj[key] === "function") {
            functionNames.push(key)
          }
        }
        return functionNames.sort();
      }

      
  }

})()

fi.libraryMethod()
