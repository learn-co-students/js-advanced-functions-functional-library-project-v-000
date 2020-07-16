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
        var collection_keys = collection.keys
        return collection_keys.length
      }
      else {
        return collection.length
       }
    },



    functions: function () {},
  };
})();

fi.libraryMethod();
