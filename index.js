const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, callback) {
      //console.log(collection)
      //console.log(callback)
      //console.log(Object.entries(collection))
      var collection_entries = Object.entries(collection);

      if (typeof collection === "object") {
        for (let k = 0; k < collection_entries.length; k++) {
          //https://javascript.info/keys-values-entries entries divides key value pairs into arrays
          //console.log(k)
          //}
          //console.log(Object.values(collection))
          //collection_values = Object.values(collection)
          callback(
            collection_entries[k][1],
            collection_entries[k][0],
            collection
          ); //If collection is a JavaScript object, callback's arguments will be (value, key, collection)
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection); //Each invocation of callback is called with three arguments: (element, index, collection)
        }
      }
      return collection;
    },

    map: function (collection, callback) {
      //was expecting object collection, got an array instead.
      //console.log(collection);
      //console.log(callback);
      //var collection_entries = Object.entries(collection);
      var new_collection = [];
      var collection_entries = Object.entries(collection);
      //console.log(collection_entries);

      if (typeof collection === "object") {
        for (let j = 0; j < collection_entries.length; j++) {
          new_collection.push(callback(collection_entries[j][1]));
        }
      } else {
        for (let i = 0; i < collection.length; i++) {
          //console.log(collection[i])
          //console.log(callback(collection[i]))
          new_collection.push(callback(collection[i])); //was expecting key value collection pairs, only needed element from array
        }
      }
      return new_collection;
    },

    reduce: function (collection, callback, acc) {
      //console.log(collection);
      //console.log(callback);
      //console.log(acc)
      //var collection_entries = Object.entries(collection);
      //console.log(collection_entries);
      //var new_collection;

      let i
      if (!acc) { //null didn't work so we used not acc to define its existence
        i = 1 //first element from iteration is second element
        acc = collection[0] //acc is replace with first element because it isn't originally given
      }
      else {
        i = 0
      }

      //console.log(acc)
      for (i; i < collection.length; i++) { //Acc (short for accumulator) starts as the initial state of the reduction, and with each successive step it should be accumulate the return value of callback.
        //console.log(callback(acc,collection[i],collection))
        acc = callback(acc,collection[i],collection)
      }

      return acc
    },

    find: function(collection,predicate) {
      //console.log("collection",collection)
      //console.log("predicate",predicate) collection.find()

      for (var i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) { //predicate is a function not a element
          //console.log(collection[i])
          return collection[i]
        }
        //else {}
      }
    },

    filter: function(collection,predicate) {
      var new_collection = []

      for (var i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) { //predicate is a function not a element
          //console.log(collection[i])
          new_collection.push(collection[i])
        }
        //else {}
      }
      return new_collection
    },

    size: function(collection) {
      if (typeof collection === "object") {
        var collection_keys = Object.keys(collection)
        return collection_keys.length
      }
      else {
        return collection.length
       }
    },

    first: function(array, n = null) {
      var new_array = []
      if (n !== null) {
        for (var i = 0; i < n; i++) {
          new_array.push(array[i])
        }
        return new_array
      }
      else {
        return array[0]
      }
    },

    last: function(array, n = null) {
      var new_array = []
      var last = array.length - 1
      var total_cycles = last - n
      //console.log(array)
      if (n !== null) {
        for (var i = last; i > total_cycles; i--) {
          //console.log(array[i])
          new_array.unshift(array[i])
        }
        //console.log(new_array)
        return new_array
      }
      else {
        return array[last]
      }
    },

    compact: function (array) {
      //console.log(array)
      var new_array = []
      //console.log(NaN === NaN)
      for (var i = 0; i < array.length; i++) { //https://stackoverflow.com/questions/22600248/is-nan-falsy-why-nan-false-returns-false/22600338 FOR THE NaN
        if ((array[i] && "dog") !== array[i]) {
          if (!(Object.is(array[i],NaN))) {
            new_array.push(array[i])
          }
        } 
      }
      //console.log(new_array)
      return new_array
    },

    sortBy: function (array, callback) {
      //console.log(array)
      //console.log(callback)
      var new_array = Object.assign([],array) //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign dryer
      //var new_array = array
      //js problem solved with Object.assign ^ JS believes you're modifying the original array keeping from being a pure function
      //aka the side effects mentioned of not being a pure function

      //console.log(new_array.sort((a,b) => (callback(a)-callback(b)))) //subtraction is the comparison
      //check indexTest 195-197 callback checks the typeof each element
      return new_array.sort((a,b) => (callback(a)-callback(b))) 
    }, //callback is what determines the nonstandard sort, also by passing the need for an if else 

    flatten: function (array, shallow) { //readme said 
      //console.log(array)
      //console.log(shallow)
      var ret = [];
      if (shallow === true) {
        for(var i = 0; i < array.length; i++) {
          if(Array.isArray(array[i])) {
             for(var j = 0; j < array[i].length; j++) {
               ret.push(array[i][j]); //pushing the array in the array - Kevin
             } 
              
          } else {
              ret.push(array[i]);
          }
      } 
      } else {
        for(var i = 0; i < array.length; i++) {
          if(Array.isArray(array[i])) {
              ret = ret.concat(this.flatten(array[i])); // "this" is need is needed. this is like self 
              //flatten was undefined outside the object, so we had to refference the object with "this"
              //https://learn.co/tracks/full-stack-web-development-v8/module-14-front-end-web-programming-in-javascript/section-9-advanced-function-usage/js-advanced-functions-context-and-implicit-setting
          } else {
              ret.push(array[i]);
          }
      } 
      }
      //console.log(ret)
      return ret;
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

    keys: function(object) {
      console.log(Object.entries(object))
      var return_array = []
      var object_array = Object.entries(object)
      for (var i = 0; i < object_array.length; i++) {
        return_array.push(object_array[i][0])
      }
      return return_array;
    },

    values: function(object) {
      console.log(Object.entries(object))
      var return_array = []
      var object_array = Object.entries(object)
      for (var i = 0; i < object_array.length; i++) {
        return_array.push(object_array[i][1])
      }
      return return_array;
    },


    functions: function (object) {
      //console.log(object) // "cmd /" does multiple lines at a time of commenting" 
      console.log(Object.entries(object))
      var return_array = []
      var object_array = Object.entries(object)
      for (var i = 0; i < object_array.length; i++) {
        if (typeof object_array[i][1] == "function") {
         return_array.push(object_array[i][0])
        }
      }
      return return_array;
    },
  };
})();
 
fi.libraryMethod();
