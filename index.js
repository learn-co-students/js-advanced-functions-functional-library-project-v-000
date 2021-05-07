const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
//EACH--------------------------------------------------------------------------------

    each: function(collection, callback) {
           //ask if  collection is array
           const valuesCollection = Array.isArray(collection) ?  collection.slice() : Object.values(collection)  //otra forma collection instanceof Array
           for (let i = 0; i < valuesCollection.length; i++)
           callback(valuesCollection[i])

      return collection
    },

//MAP--------------------------------------------------------------------------------
    map: function(collection, callback) {
           if (!Array.isArray(collection)){ collection = Object.values(collection)} //curly brackets can go or not

           const newArr = []

            for (let i = 0; i< collection.length; i++)
              newArr.push(callback(collection[i]))

            return newArr
    },
//REDUCE--------------------------------------------------------------------------------

    reduce: function(collection, callback, acc) {
            //if acc doesnot exist array[0] is acc and current value should start in array[1]
//Check the test file to understand this
            if (!acc){
              acc = collection[0]
				      collection = collection.slice(1)
            }


            for (let i = 0; i < collection.length; i++) {
             acc = callback(acc, collection[i], collection)
           }
           return acc
    },
//FIND--------------------------------------------------------------------------------
//note: A predicate function is a function that takes one value as input and returns true / false based on whether the value satisfies the condition
    find: function(collection, predicate) {
      //if collection has objects
      if (!(collection instanceof Array))
       collection = Object.values(collection)


      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])){
          return collection[i]
        } else {
          undefined
        }
      }//for
    },

//FILTER--------------------------------------------------------------------------------
   filter: function(collection, predicate){
     //if collection has objects
       if (!(collection instanceof Array))
        collection = Object.values(collection)

       const newArr = []

       for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) newArr.push(collection[i])
       }

      return newArr

   },

//SIZE--------------------------------------------------------------------------------

size: function(collection){
  return (collection instanceof Array) ? collection.length : Object.keys(collection).length

},


//FIRST--------------------------------------------------------------------------------

 first: function(collection,n=false) {
   return (n)?  collection.slice(0,n) : collection[0]
 },

//LAST--------------------------------------------------------------------------------
last: function(collection,n=false) {
  return (n)?  collection.slice(collection.length-n,collection.length) : collection[collection.length-1]
},



//COMPACT--------------------------------------------------------------------------------
compact: function(collection){
  let compactArray = []

   for (const i of collection) {
     if (!!i) {
       compactArray.push(i)
     }
   }
   return compactArray

},


//SORTBY--------------------------------------------------------------------------------
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

sortBy: function(array, callback){
  const  newArray = [...array]
 return newArray.sort(
         function(a,b){
            return callback(a) - callback(b)  // order by ascending, not sure why it works with strings
         })
},


//FLATTEN--------------------------------------------------------------------------------





//REDUCE--------------------------------------------------------------------------------
//REDUCE--------------------------------------------------------------------------------

    functions: function() {

    },


  }
})()

fi.libraryMethod()
