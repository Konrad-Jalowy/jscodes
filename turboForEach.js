Array.prototype.turboForEach = function(callback, thisArg, 
    skipWhen=()=>false,
    breakWhen=()=>false){

    var array = this;
    thisArg = thisArg || this;

    for (var i = 0; i < this.length; i++) {

       if(breakWhen.call(thisArg, array[i], i, array) === true){
          break;
       }

       if(skipWhen.call(thisArg, array[i], i, array) === true){
          continue;
       }
       

       callback.call(thisArg, array[i], i, array);
    }   
 }