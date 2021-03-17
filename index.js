const reduce = Function.bind.call(Function.call, Array.prototype.reduce);
const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
const concat = Function.bind.call(Function.call, Array.prototype.concat);
const keys = Reflect.ownKeys;

if (!Object.values) {
	Object.values = function values(O) {
		return reduce(keys(O), (v, k) => concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []), []);
	};
}

if (!Object.entries) {
	Object.entries = function entries(O) {
		return reduce(keys(O), (e, k) => concat(e, typeof k === 'string' && isEnumerable(O, k) ? [[k, O[k]]] : []), []);
	};
}


const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let arr;
      if(collection instanceof Array) {
        arr = collection
      } else {
        arr = Object.values(collection)
      }
      arr.forEach(element => {
        callback(element)
      });
      return collection
    },

    map: function(collection, callback) {
      const newCollection = []
      if (Array.isArray(collection)) {
        collection.forEach (element => newCollection.push(callback(element)))
      } else
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          const element = collection[key]
          newCollection.push(callback(element))
        }
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let output = (!!acc) ? acc :collection[0]
      for (let i = (!!acc) ? 0 : 1; i < collection.length; i++) {
        output = callback(output, collection[i], collection)
      }
      return output
    },

    find: function(collection, predicate) {
      if (!Array.isArray(collection)) {
        collection = Object.values(collection)
      }
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let result = []
      if (!Array.isArray(collection)) {
        collection = Object.values(collection)
      }
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i])
        }
      }
      return result
    },

    size: function(collection, predicate) {
      if(collection instanceof Array){
        return collection.length
      }
      else{
        return Object.values(collection).length
      }
    },

    first: function(array, n=1) {
      return n>1 ? array.slice(0,n) : array[0]
    },

    last: function(array, n=1) {
      return n>1 ? array.slice(array.length-n) : array[array.length-n]
    },

    compact: function(array) {
      let result = []
      for (let i = 0; i<array.length; i++) {
        if (array[i]) {
          result.push(array[i])
        }
      }
      return result
    },

    sortBy: function(array, callback) {
      let result = [...array]
      return result.sort(function(a,b) {
        return callback(a) - callback(b)
      })
    },

    uniq: function(array, isSorted=false, callback=false) {
      if (isSorted) {
        let sorted = [array[0]]
        for (let i = 1; i < array.length; i++) {
          if (array[i] != array[i-1]) {
            sorted.push(array[i])
          }
        }
        return sorted
      } else if (!callback) {
        return Array.from(new Set(array))
      } else {
        const transformedValues = new Set()
        const uniqValues = new Set()
        for (let value of array) {
          const transformedValue = callback(value)
          if (!transformedValues.has(transformedValue)) {
            transformedValues.add(transformedValue)
            uniqValues.add(value)
          }
        }
        return Array.from(uniqValues)
      }
    },

    keys: function(object) {
      let keys = []
      for (const key in object) {
        keys.push(key)
      }
      return keys
    },

    values: function(collection) {
      let values = [];
      for(let k in collection) {
        values.push(collection[k])
      }
      return values
    },

    functions: function(object) {
      return Object.keys(object).map((key) => {
        if(typeof object[key] === 'function'){
          return key
        }
        else{
          return false
        }
      }).filter((value) => value)
    },

    flatten: function(collection, shallow, newArr = []) {
      if(!Array.isArray(collection)) {
        newArr.push(collection)
      }
      if(shallow) {
        for(let item of collection) {
          if(Array.isArray(item)) {
            for(let newItem of item) {
              newArr.push(newItem)
            }
          } else {
            newArr.push(item)
          }
        }
      } else {
        for(let i=0; i<collection.length; i++) {
          this.flatten(collection[i], false, newArr)
        }
      }
      return newArr
    },

  }

})()

fi.libraryMethod()
