const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
       const newCllection = (collection instanceof Array)? collection.slice() : Object.values(collection)
       for(let i=0; i<newCllection.length; i++){
         callback(newCllection[i])
       }
       return collection
    },

    map: function(collection, callback) {
      if (!(collection instanceof Array))
         collection = Object.values(collection)
      
      let newCollection = []
      
      for(let i=0; i<collection.length; i++){
        newCollection.push(callback(collection[i]))
      }
      return newCollection
   },

    reduce: function(c = [], callback= () => {}, acc) {
       let collection = c.slice(0)

       if (!acc){
         acc = collection[0]
         collection = collection.slice(1)
       }

       for (let i=0; i<collection.length; i++){
         acc = callback(acc, collection[i], collection)
        }
       return acc;
    },

    find: function(collection, predicate) {
      if(!(collection instanceof Array))
        collection = Object.values(collection)
      
      for(let i=0; i<collection.length; i++)
        if (predicate(collection[i])) return collection[i]
      
      return undefined
    },

    filter: function(collection, predicate) {
      let newCollection = []
      if(!(collection instanceof Array))
        collection = Object.values(collection)
      
      for(let i=0; i<collection.length; i++){
        if(predicate(collection[i]))
           newCollection.push(collection[i])
      }
      
      return newCollection
    },

    size: function(collection) {
      if(!(collection instanceof Array))
        collection = Object.values(collection)

      return collection.length
    },

    first: function(collection, arg=false) {
      if (arg)
        return collection.slice(0, arg)
      
      return collection[0]
    },

    last: function(collection, arg=false) {
      if (arg)
        return collection.slice(collection.length - arg, collection.length)
      
      return collection[collection.length-1]
    },

    compact: function(collection) {
      let newCollection = []
      if(!(collection instanceof Array))
        collection = Object.values(collection)
      
      for(let i=0; i<collection.length; i++){
         if(!!collection[i])
           newCollection.push(collection[i])
      }
      
      return newCollection
    },

    sortBy: function(collection, callback) {
      const newCollection = [...collection]
      return newCollection.sort((a, b) => {
         return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr){
      for(let val of arr)
       receiver.push(val)
    },

    flatten: function(collection, shallow, newCollection=[]) {
      if(!Array.isArray(collection)) return newCollection.push(collection)
      if(shallow){
        for(let val of collection)
          Array.isArray(val)? this.unpack(newCollection, val) : newCollection.push(val)
      }else{
        for(let val of collection){
          this.flatten(val, false, newCollection)
        }
      }
      return newCollection
    },

    uniqSorted: function(collection, iteretee){
      const sorted = [collection[0]]
      for(let i=1; i<collection.length; i++){
        if(sorted[i-1] !== collection[i])
           sorted.push(collection[i])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteretee=false) {
      if (sorted){
        return fi.uniqSorted(collection, iteretee)
      } else if (!iteretee){
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for(let val of collection){
          const moddedVal = iteretee(val)
          if(!modifiedVals.has(moddedVal)){
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }

    },

    keys: function(object) {
      const keys = []
      for(let key in object){
        keys.push(key)
      }
      return keys
    },

    values: function(object) {
      const values = []
      for(let key in object){
        values.push(object[key])
      }
      return values
    },

    functions: function(object) {
      const functionNames = []
      for(let key in object){
        if(typeof object[key] === "function"){
          functionNames.push(key)
        }
      }
      return functionNames.sort()
    }
  }
})()

fi.libraryMethod()
