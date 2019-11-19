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
      let collection = array.slice();

      for (let i = 0; i < collection.length; i++){
        if (collection[i] === false) {
          collection.splice(collection[i])
        }
        return collection
      }
    },
  }
})()

fi.libraryMethod()

// functions: function() {

    // },