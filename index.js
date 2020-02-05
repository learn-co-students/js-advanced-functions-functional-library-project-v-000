const alertFn = (function(element){
 //Object.values(element) ? alert(Object.values(element)) : alert(element)
  //!!element[key] ?  alert(Object.values(element)) : alert(element)
  //alert(Object.values(element));
 alert(element)
  //for (let key in element) {
  //alert(key, yourobject[key]);
})()


const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(coll, alertFn) {
      //for (let x = 0; x < coll.length; x++) {
      //  alertFn(coll[x]);
      //}
      const newCollection = Object.values(coll)
      for (element of newCollection) {
        alertFn(element)
      }
      return coll;
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
