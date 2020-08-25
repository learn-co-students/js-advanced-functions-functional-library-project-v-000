sortBy notes which didnt work
 /*
      if (typeof array[0] === 'number') { //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof number not integer
        var new_array = array.sort((a,b) => a-b) //The point of this exercise is not to write your own sorting algorithm and you are free to use the native JS sort
        //https://www.w3schools.com/js/js_array_sort.asp
        //console.log(new_array)
      } else if (typeof array[0] === 'string') {
        var new_array = array.sort()
        //console.log(new_array)
      } else if (typeof array[0] === 'object'){
        var new_array = array.sort((a,b) => (a.age > b.age))
        //console.log(new_array)
      }
      //https://medium.com/coding-at-dawn/how-to-sort-an-array-numerically-in-javascript-2b22710e3958
      return new_array 
      */

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

     console.log(array)
      console.log(isSorted)
      console.log(callback)
      var sorted_array = []

      if (callback) {
        //for (var i = 0; i < array.length; i++) {
          //if (callback(array[i])) {
            //sorted_array.push(callback(array[i]))
          //}
        //}
        var set = new Set(array) //use Set! It doesn't have duplicates
        console.log(set)
        let new_array = Array.from(set)
        //console.log(new_array)
        for (var i = 0; i < new_array.length; i++) {
          if (callback(new_array[i])) {
            sorted_array.push(callback(array[i]))
          }
        }
        return sorted_array
      } else {
        var set = new Set(array) //use Set! It doesn't have duplicates
        //console.log(set)
        let new_array = Array.from(set)
        console.log(new_array)
      return new_array
      }