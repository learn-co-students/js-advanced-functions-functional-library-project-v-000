const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(coll, clbk) {
        let  newColl = Array.isArray(coll) ? coll.slice() : Object.values(coll)
        for (let i = 0; i < newColl.length; i++) {
          clbk(newColl[i]) ;
        }
        return coll
    },

    map: function(coll, clbk) {
      let newColl = Array.isArray(coll) ? coll.slice() : Object.values(coll)
      let arr = [];
      for (let i = 0; i < newColl.length; i++) {
        arr.push(clbk(newColl[i]))
      }
      return arr
    },

    reduce: function(collection, callback, acc) {
      let i = !!acc ? 0 :(1, acc = collection[0] )
      for (i ; i < collection.length; i++) {
        acc = callback(acc, collection[i]);        
      }
      return acc
    },

    find: function (collection, predicate){
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) { return collection[i]}
      }
    },

    filter: function (collection, predicate){
      let arr = [] ;
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) { arr.push(collection[i]) }
      }
      return arr
     },

    size: function (collection){
      return Array.isArray(collection) ?  collection.length : Object.keys(collection).length
     },

    first: function (array, n) {
      return n ? array.slice(0, n) : array[0]
    },

    last: function (array, n) {
      return n ? array.slice(array.length-n,array.length) : array[array.length-1]
    },

    compact: function (array){
      let newArray = [] ;
      for (let i = 0; i < array.length; i++) {
        if (false != !!array[i]) { newArray.push(array[i])}
      }
      return newArray
    },
    
    sortBy: function (array, fn){
        let newArray = array.slice();
        return newArray.sort((a,b)=> fn(a) - fn(b))
    },

    flatten: function (collection, shallow, newCollection = []) {
      if (!Array.isArray(collection)) {
        return newCollection.push(collection)
      }
      if (shallow) {
        for (let e of collection) {
          if (Array.isArray(e)) {
            for (let v of e) {
              newCollection.push(v)
            }
          } else {
            newCollection.push(e)
          }
        }
      } else {
        for (let e of collection) {
          this.flatten(e, false, newCollection)
        }
      }
      return newCollection;
    },
    
    uniq: function (collection, isSorted = false, iteratee = false){
      if (isSorted) {
        return Array.from(new Set(collection))
      } else if (iteratee)  {
        let unSortSet = new Set ;
        let unSortSetValue = new Set ;
        for (let item of collection) {
          if (!unSortSet.has(iteratee(item))){
            unSortSet.add(iteratee(item)) 
            unSortSetValue.add(item)
        }
      }
        return fi.sortBy(Array.from(unSortSetValue), (a)=> a)
    }else{
        let sortedArray = fi.sortBy(collection, (a) => a)
        return Array.from(new Set(sortedArray))
       
      }
      
     },

    keys: function (object) {
      return Object.keys(object)
    },

    values: function (object) {
      return Object.values(object)
    }, 
    functions: function(object) {
      let arr = [] ;
      for(const prop in object){
        if (typeof object[prop] === "function"){
          arr.push(prop)
      }
    }
     return arr
      
    },


  }
})()

fi.libraryMethod()










