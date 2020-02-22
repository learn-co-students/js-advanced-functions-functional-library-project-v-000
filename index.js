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

    functions: function() {

    },


  }
})()

fi.libraryMethod()
