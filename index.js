const fi = (function() {
  //Each invocation of callback is called with three arguments: (element, index, collection). 
  //If collection is a JavaScript object, callback's arguments will be (value, key, collection).
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      // Use Object.assign to turn input array into an object so function works with either array or object
      // const copyOfColl = Object.assign({}, collection);
      //   for (const key in copyOfColl) {
      //     callback(copyOfColl[key], key, copyOfColl);
      //   }
      // return collection;

      // Turn object into array - CLEANER SOLUTION?
      let newColl;
      if (!collection.isArray) {
        newColl = Object.values(collection);
      } else {
        newColl = collection.slice(0);
      }
      for (let i=0; i<newColl.length; i++) {
        callback(newColl[i], i, newColl);
      }
      return collection;
    },

    map: function(collection, callback) {
      // const copyOfColl = Object.assign({}, collection);
      const newColl = [];
      // for (const key in copyOfColl) {
      //   newColl.push(callback(copyOfColl[key], key, copyOfColl));
      // }
      // return newColl;
      if (!collection.isArray) {
        collection = Object.values(collection);
      }
      for (let i=0; i<collection.length; i++) {
        newColl.push(callback(collection[i], i, collection));
      }  
      return newColl;
    },

    reduce: function(collection, callback, acc=null) {
      let total;
      let i = 0;
      if (acc !== null) {
        total = acc;
      } else {
        total = collection[0]
        i = 1;  // Here can also use `collection = collection.slice(1)`
      }
      while (i < collection.length) {   // and switch this to a regular for loop
        total = callback(total, collection[i], collection);
        i++;
      }
      return total;
    },

    find: function(collection, predicate) {
      // Or can use `collection = Object.values(collection)` to turn it into an array
      const copyOfColl = Object.assign({}, collection);
      for (const key in copyOfColl) {
        if (predicate(copyOfColl[key])) {
          return copyOfColl[key];
        }
      }
    },

    filter: function(collection, predicate) {
      // Or can use `collection = Object.values(collection)` to turn it into an array
      const copyOfColl = Object.assign({}, collection);
      let included = [];
      for (const key in copyOfColl) {
        if (predicate(copyOfColl[key])) {
          included.push(copyOfColl[key]);
        }
      }
      return included;
    },

    size: function(collection) {
      // Or can use `collection = Object.values(collection)` to turn it into an array
      const copyOfColl = Object.assign({}, collection);
      return Object.keys(copyOfColl).length;
    },

    // Array functions from here
    first: function(array, stopVal = null) {
      if (stopVal != null) {
        return array.slice(0, stopVal);
      } else {
        // return array.slice(0, 1)[0];
        return array[0];
      }
    },

    last: function(array, startVal = null) {
      if (startVal != null) {
        // return array.slice(startVal * -1);
        return array.slice(array.length-startVal, array.length) 
      } else {
        // return array.slice(-1)[0];
        return array[array.length - 1];
      }
    },

    compact: function(array) {
      const newColl = [];
      const falsey = [false, null, 0, "", undefined, NaN]
      for (let i=0; i<array.length; i++) {
        if (!falsey.includes(array[i])) {
          newColl.push(array[i]);
        }
      }
      return newColl;
    },

    sortBy: function(array, callback) {

      return array.slice().sort(function(a,b) {
        return callback(a) - callback(b);
      });
    },

    flatten: function(array, shallow=false, flatArray=[]) {
      if (shallow) {
        for (let el of array) {
          if (Array.isArray(el)) {
            for (let i=0; i<el.length; i++) {
              flatArray.push(el[i]);
            }
          } else {
            flatArray.push(el);
          }
        }
      } else {
        for (let el of array) {
          if (Array.isArray(el)) {
            fi.flatten(el,false,flatArray); // can use this.flatten here
          } else {
          flatArray.push(el);
          }
        }
      }
      return flatArray;
    },

    // !!!!!!!!!!!SOLUTION CODE
    // uniqSorted: function(collection) {
    //   const sorted = [collection[0]]
    //   for (let idx = 1; idx < collection.length; idx++) {
    //     if (sorted[idx-1] !== collection[idx])
    //       sorted.push(collection[idx])
    //   }
    //   return sorted
    // },

    uniq: function(collection, sorted=false, iteratee=false) {
      // if (sorted) {
      //   return fi.uniqSorted(collection)
      // } else if (!iteratee) {
      if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = []
        const uniqVals = []
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.includes(moddedVal)) {
            modifiedVals.push(moddedVal)
            uniqVals.push(val)
          }
        }
        return uniqVals
      }
    },
    // END SOLUTION CODE!!!!!!!!!!!!

    // uniq: function(array, sorted=false, callback = a => a) {
      // let newArr = [];
      // let present;
      // console.log("Orig: " + array);
      // // if (!sorted) {
      // //   const sortCallback = a => a;
      // //   array = fi.sortBy(array, sortCallback);
      // // }
      // console.log("sorted: " + array);
      // for (let i=0; i<array.length; i++) {
      //   present = false;
      //   for (let j=i+1; j<array.length; j++) {
      //     if (callback(array[i]) === callback(array[j])) {
      //       present = true;
      //       break;
      //     }
      //   }
      //   if (!present) {
      //     newArr.push(array[i])
      //   } 
      // }
      // return newArr;
    // },

    keys: function(object) {
      const keys = [];
      for (const key in object) {
        keys.push(key);
      }
      return keys;
    },

    values: function(object) {
      const values = [];
      for (const key in object) {
        values.push(object[key]);
      }
      return values;
    },

    functions: function(object) {
      const functions = [];
      for (const key in object) {
        if (typeof(object[key]) === "function") {
          functions.push(object[key]);
        }
      }
      return functions.sort();
    }

  }
})()

fi.libraryMethod()
