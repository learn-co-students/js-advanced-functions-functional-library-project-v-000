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

    find: function(element, array) {
      // const newArray = (array instanceof Array) ? array.slice() : Object.values(array)
      // if (!(array instanceof Array))
      //   array = Object.values(array)

      // for (let index = 0; index < array.length; index++) 
      //   if (element(array[index])) return array[index]
 
      // return undefined
    },

    // functions: function() {

    // },


  }
})()

fi.libraryMethod()
