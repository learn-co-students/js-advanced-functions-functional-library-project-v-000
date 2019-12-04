const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratortee) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++)
        iteratortee(newCollection[i])

        return collection
    },

    map: function (collection, iteratortee) {
      if (!(collection instanceof Array))
       collection = Object.values(collection)
      
      const anotherCollection = [];
      
      for (let i = 0; i < collection.length; i++) {
        anotherCollection.push(iteratortee(collection[i])) 
      }
      return anotherCollection
    },

    reduce: function (collection = [], callback = () => {}, acc) {
      let newCollection = collection.slice(0)

      if (!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
      }

     for (let i = 0; i < newCollection.length; i++) {
       acc = callback(acc, newCollection[i], newCollection);
       
     }
     return acc
    },

    find: function(collection, predicate) {
      // const newArray = (array instanceof Array) ? array.slice() : Object.values(array)
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }

      for (let index = 0; index < collection.length; index++) 
        if (predicate(collection[index])) {
            return collection[index]
          }
 
      return undefined
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection)
      }

      const anotherCollection = [];

      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])){
         anotherCollection.push(collection[i]);
        }
      }
      return anotherCollection;
    },

    size: function(collection) {
      return (collection instanceof Array) ? collection.length :
        Object.keys(collection).length  
    },

    first: function(array, n = false) {
    // if there is not a parameter, it returns the first element 
    // if there is a paramater, it returns the all of the elements up to the index from the parameter
    
    return (n) ? array.slice(0, n) : array[0]
    },
    
    last: function(array, n = false) {
      return (n) ? array.slice(array.length-n, array.length) : array[array.length-1]
    },

    compact: function(array) {
      const falseElements = new Set([false, null, 0, "", undefined, NaN]);
      return array.filter(el => !falseElements.has(el));
    },

    sortBy: function(array, callback) {
      let newCollection = [...array]
      
      newCollection.sort(function (a, b) {
        return callback(a) - callback(b);
      });
      return newCollection;
    },

    flatten: function(array, shallow = false) {
      // console.log(array); 
      let newArray = [];
      if (shallow){
        // newArray = array.reduce(function(prev, curr) {
        //   console.log(prev.concat(curr));
        //   return prev.concat(curr);
        for (let i = 0; i < array.length; i++) {
          for (let j = 0; j < array[i].length; j++)
            newArray.push(array[i][j]);
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          newArray.push(array[i])
        }
      }
      return newArray;
    },

    uniq: function(array, isSorted = false, callback = false) {

      isSorted ? array = array.sort() : array
      // iterate over the array
      // call the callback function on each element of the array - for loop
      // iteration exists outside of callback function

      if (callback) {
        
        for (let i = 0; i < array.length; i++) {
          array.push(callback(array[i]))
          debugger
          return array;
        }
        
      } 

      return array.filter((item, index) => {
        console.log(item, index, array.indexOf(item), array.indexOf(item) === index);
      return array.indexOf(item) === index
      })

    }
    

  }
})()

fi.libraryMethod()

// functions: function() {

    // }, 