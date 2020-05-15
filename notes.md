

  index.js
    each
      ✓ calls alert with each element passed
      ✓ calls alert properly on object values
      ✓ returns the original collection
    map
      ✓ successfully returns a correctly populated array
      ✓ does not modify the original array
      ✓ successfully returns a correctly populated array from modified object values
      ✓ does not modify the original object
    reduce
      ✓ returns the correct reduced value when passed an initial value
      ✓ returns the correct reduced value when not passed an initial value
      ✓ does not modify the original array
    find
      ✓ returns the value if found
      ✓ does not traverse the whole array if the value is found early
      ✓ returns undefined if the value is not present
    filter
      ✓ correctly filters for values that the callback evaluates as true
    size
      ✓ correctly returns the size of the collection when an array is passed
      ✓ correctly returns the size of the collection (amount of keys) when an object is passed
    first
      ✓ returns the first element of the collection
      ✓ returns the first n elements of the collection when the second optional argument (n) is provided
    last
      ✓ returns the last element of the collection
      ✓ returns the last n elements of the collection when the second optional argument (n) is provided
    compact
      ✓ returns a copy of the **array** with all falsy values removed. In JavaScript, _false_, _null_, _0_, _""_, _undefined_ and _NaN_ are all falsy.
      ✓ does not modify the original array
    sortBy
      ✓ correctly sorts arrays of integers and arrays of strings
      ✓ does not modify the original arrays
      ✓ correctly sorts arrays of integers with non-standard sort
    flatten
      ✓ correctly flattens a ludicrously nested array
      ✓ correctly flattens a single level when a second argument of "true" is passed
    uniq
      ✓ removes duplicate values from an array
[ 1, 2, 3 ]
      ✓ removes duplicate values from an array when an iteratee is applied











    keys
      ✓ retrieves all the names of the object's own enumerable properties
      ✓ does not modify the original object you crazy DOGE!
    values
      ✓ retrieves all the values of the object's own properties
      ✓ does not modify the original object you crazy DOGE!
    functions
      ✓ returns a sorted collection of the names of every method in an object


  34 passing (3s)