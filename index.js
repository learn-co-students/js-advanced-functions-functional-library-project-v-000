const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if(typeof(collection)==='object'){
        for(let key in collection){
          callback(collection[key],key,collection)  
        }  
      }
      else{
        for(i=0;i<collection.length;i++){
          callback(collection[i],i,collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newcollect=[]
      if(!Array.isArray(collection)){
        let index=0
        for(let key in collection){
          newcollect[index]=callback(collection[key],key,collection)  
          index+=1
        } 
      }
      else{
        for(let i=0;i<collection.length;i++){
          newcollect[i]=callback(collection[i],i,collection)
        }
      }
      return newcollect

    },

    reduce: function(collection, callback, Acc) {
      let acc=0
      if (Acc!=null){
        for(let i=0; i<collection.length;i++){
          acc=callback(acc,collection[i],collection)
        }
        acc+=Acc
      }
      else{
        acc=collection[0]
        for(let i=1; i<collection.length;i++){
          acc=callback(acc,collection[i],collection)
        }        
      }
      return acc
    },

    find: function(collection, predicate){
      for(let value of collection){
        if(predicate(value))  
          return value
      }
      return undefined
    },
    filter: function(collection,predicate){
      let newcollect=[]
      let index =0
      for(let value of collection){
        if(predicate(value)){  
          newcollect[index]=value
          index+=1
        }
      }
      return newcollect
    },

    size: function(collection){
      if(!Array.isArray(collection)){
        let index=0
        for(let key in collection){  
          index+=1
        }
        return index 
      }
      else{
        return collection.length
      }
    },

    first: function(array, n){
      if(n==null)
        return array[0]
      else
        return array.slice(0,n)
    },
    last: function(array, n){
      if(n==null)
        return array[array.length-1]
      else
        return array.slice(array.length-n)
    },
    compact: function(array){
      let new_arr=[]
      let index=0
      for(let ind in array){
        if (array[ind]!=false && array[ind]!=null && array[ind]!=0 && array[ind]!="" && array[ind]!=undefined && !Number.isNaN(array[ind])){
          new_arr[index]=array[ind]
          index+=1
        }
      }
      return new_arr
    },
    sortBy: function(array, callback){
      
      let arr_entr=[]
    
      for(let key in array){
        arr_entr.push([parseInt(key),array[key]])
      }
      let arr_entr_aft=arr_entr.map(ele=>{return [ele[0],callback(ele[1])]})
      
      arr_entr_aft.sort(function(a, b){return a[1] - b[1]})
      
      let index = arr_entr_aft.map(ele => ele[0])
      let rearrange = index.map(i => array[i])
      
      return rearrange
    },

    flatten: function(array,flat){
      if(flat==true){
        return array.reduce((acc, val) => acc.concat(val), []);
      }
      else{
        return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? this.flatten(val) : val), [])
      }

    },

    uniq: function(array,isSorted, callback){
      let new_arr=[]
      if(isSorted==true){
        for(let ind in array){
          if(array[ind]!=array[ind+1] || ind==array.length-1){
            new_arr.push(array[ind])
          }  
        }
      }
      else{
        if(callback!=null){
          fast:
          for(let val of array){
            let c_val=callback(val)
            for(let valn of new_arr){
              if(c_val===callback(valn)){
                continue fast;
              }
            }
            new_arr.push(val)
          }
        }
        else{
          fast2:
          for(let val of array){ 
            for(let valn of new_arr){
              if(val===valn){
                continue fast2;
              }
            }
            new_arr.push(val)
            
          }
        }
        return new_arr
      }

    },

    keys: function(object){
      let array=[]
      let index=0
      for(let key in object){
        array[index]=key
        index+=1
      }
      return array
    },
    values: function(object){
      let array=[]
      let index=0
      for(let key in object){
        array[index]=object[key]
        index+=1
      }
      return array
    },
    functions: function(object) {
      let array=[]
      let index=0
      for(let key in object){
        if(typeof(object[key])=='function'){
          array[index]=key
          index+=1
        }
      }
      return array.sort()
    }


  }
})()

//fi.libraryMethod()
