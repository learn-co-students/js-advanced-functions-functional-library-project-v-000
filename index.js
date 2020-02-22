const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, f) {
      const items = (collection instanceof Array)? collection : Object.values(collection);
      
      for(const item of items){
        f(item);
      }
      
      return collection;
    },

    map: function(collection, f) {
      const items = (collection instanceof Array) ? collection : Object.values(collection);
      const newCollection = []
      
      for(const item of items){
        newCollection.push(f(item));
      }
      
      return newCollection;
    },

    reduce: function(collection, f, acc) {
      let items = collection;
      
      if (!acc){
        acc = items[0];
        items = items.slice(1)
      }
        
      for(const item of items){
        acc = f(acc, item, items);
      }
      
      return acc;
    },
    
    find: function(collections, f){
      for(const item of collections){
        if(f(item)){
          return item;
        }
      }
    },
    
    filter: function(collection, f){
      const matches = [];
      
      for(const item of collection){
        if(f(item)){
          matches.push(item);
        }
      }
      
      return matches;
    },
    
    size: function(collection){
      collection = (collection instanceof Array) ? collection : Object.keys(collection);
      return collection.length;
    },
    
    first: function(array, n = 0){
      return ((n === 0) ? array[0] : array.slice(0,n)); 
    },
    
    last: function(array, n = 0){
      return ((n === 0) ? array.slice(-1)[0] : array.slice(-n));
    },
    
    compact: function(array){
      const compact = [];
      
      for(const item of array){
        if(!!item){
          compact.push(item)
        }
      }
      
      return compact;
    },
    
    sortBy: function(array, f){
      const sortedArray = [...array];
      return sortedArray.sort((a,b) => f(a) -f(b));
    },
  
    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },
    
    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
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
      // Using for loop
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      // Using for loop
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

  }
})()

fi.libraryMethod()
