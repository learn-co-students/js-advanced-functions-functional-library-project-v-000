const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },


    each: function(theCollection, alert) {
      let newCollection = (theCollection instanceof Array) ? theCollection : Object.values(theCollection)

      for (let i = 0; i < newCollection.length; i++){
        alert(newCollection[i])
      }
    
      return theCollection
    },

    map: function(theCollection, callbackAction) {
      let newCollection = (theCollection instanceof Array) ? theCollection : Object.values(theCollection)

      let newArray = []

      for (let i = 0; i < newCollection.length; i++) {
        newArray.push(callbackAction(newCollection[i]))
      }

      return newArray
    },

    reduce: function(theCollection, callbackAction, acc) {
      let theNewCollection = theCollection
      if (!acc){
        acc = theCollection[0]
        theNewCollection = theCollection.slice(1)
      }
      for (let i = 0; i < theNewCollection.length; i++){
        acc = callbackAction(acc, theNewCollection[i], theNewCollection)

      }
      return acc
    },

    find: function(theCollection, predicate){
      let valueFound = 0
      for (let i = 0; i < theCollection.length; i++){
        if (predicate(theCollection[i])){
          valueFound = theCollection[i]
          break
        }
        else {
          valueFound = undefined 
        }
      }
      return valueFound
    },

    filter: function(theCollection, predicate){
      let arrayOfValues = []
      for (let i = 0; i < theCollection.length; i++) {
        if (predicate(theCollection[i])) {
          arrayOfValues.push(theCollection[i])
        }
      }
      return arrayOfValues
    },

    size: function(theCollection){
      let theNewCollection = (theCollection instanceof Array) ? theCollection : Object.values(theCollection)
      
      return theNewCollection.length

    },

    first: function(array, nElements = 1){
      let newArray = (nElements > 1) ? array.slice(0, nElements) : array[0]
      return newArray

    },

    last: function(array, nElements = 1) {
      const arraySize = array.length
      let newArray = (nElements > 1) ? array.slice((arraySize - nElements), arraySize) : array[arraySize - 1]

      return newArray
    },

    compact: function(array) {
      let newArray = []

      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray

    },


    sortBy: function (array, callbackAction) {

      let newArray = [...array]
      
      return newArray.sort((a, b) => callbackAction(a) - callbackAction(b))

    },


    flatten: function () {

    },

    uniq: function () {

    },
    
    
    functions: function() {

    },


  }
})()

fi.libraryMethod()
