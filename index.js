const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    
    callback: function(element, index, collection) {
      alert(`${collection[index]}`)
    },

    each: function(collection, callback) {
      if (typeof collection === 'object') {
        for (let key in collection) {
          callback(collection[key], key, collection);
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection);
        }
      }
      return collection;
    },

    map: function(collection, map_callback) {
      let new_array = []
      for (let [key, value] of Object.entries(collection)) {
        new_array.push(map_callback(value))
      }
      return new_array;
    },
    
    reduce: function(collection, reduce_callback, acc=0) {
      let val = 0;
      for (let i = 0; i < collection.length; i++) {
        if (acc !== 0) {
          reduce_callback(acc, collection[i], collection)
          val+=acc          
        } else {
          val += reduce_callback(acc, collection[i], collection)
        }
        
      }
      return val;
    },
    
    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true )
          return collection[i];
      }
      return undefined;
    },
    
    size: function(collection) {
      return Object.keys(collection).length;
    },

    filter: function(collection, predicate) {
      let new_array = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true)
          new_array.push(collection[i]);
      }
      return new_array;
    },

    first: function(array, num=0) {
      
     if (num > 0) {
      let new_array = [];
      let j = 0;
      for (let i = 0; i < array.length; i++) {
        if (i < num) {
          new_array.push(array[i]);
          j++;
        }
      }
      return new_array;
     } else {
       return array[0];
     }
    },

    last: function(array, num=0) {
      if (num > 0 && array.length >= num) {
        let new_array = [];
        let index = array.length - num;
        for (let i=index; i < array.length; i++) {
          new_array.push(array[i]);
        }
        return new_array;
      } else {
        return array[array.length-1];
      }
    },

    compact: function(array) {
      let new_array = [];
      for (let i = 0; i < array.length; i++) {
        if (!array[i]) {
          continue;
        } else {
          new_array.push(array[i]);
        }
      }
      return new_array;
    },

    sortBy: function(array, sort_callback) {
      let new_arr = [...array]
      new_arr.sort(function(a,b) { return sort_callback(a) - sort_callback(b)});
      return new_arr;
    },

    getArrayDepth: function (value) {
      return Array.isArray(value) ? 
        1 + Math.max(...value.map(getArrayDepth)) :
        0;
    },

    
    flatten: function(ary, depth=false) {
      let new_array = [];
      if (!depth) {
        for(let i = 0; i < ary.length; i++) {
          if(Array.isArray(ary[i])) {
            new_array = new_array.concat(fi.flatten(ary[i]));
          } else {
            new_array.push(ary[i]);
          }
        }
      } else {
        for (let i = 0; i < ary.length; i++) {
          if (Array.isArray(ary[i])) {
            new_array = new_array.concat(ary[i]);
          } else {
            new_array.push(ary[i]);
          }
        }
      }
       return new_array;
    },
    
    uniq: function(array,  isSorted=false, uniq_callback) {
      let new_array = []
      if (isSorted) {
        for (let i = 0; i < array.length; i++) {
          new_array.push(array[i])
          for (let j = i+1; j < array.length; j++) {
            if (array[i] === array[j]) {
              i+=1
            }
          }
        }
      } else {
        let results_array = [];
        if (uniq_callback) {
          for (let i = 0; i < array.length; i++) {
            let element = uniq_callback(array[i]);
            if (!results_array.includes(element)) {
              new_array.push(array[i]);
              results_array.push(element);  
            }
          }
          
        } else {
          for (let i = 0; i < array.length; i++) {
            if (!new_array.includes(array[i])) {
              new_array.push(array[i]);
            }
          }
        }
      }
      return new_array;   
    },
    
    keys: function(object) {
      let new_array = [];
      for (let [val, key] in Object.entries(object)) {
        new_array.push(key);
      }
      return new_array;
    },
    
    values: function(object) {
      let new_array = [];
      for (let key in object) {
        new_array.push(object[key]);
      }
      return new_array;      
    },
    
    functions: function(object) {
      let new_array = [];
      for (let key in object) {
        if (typeof object[key] === 'function') {
          new_array.push(key);
        }
      }
      return new_array;
    },


  }
})()

fi.libraryMethod();
