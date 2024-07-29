function newify(func){
    return function(...args){
       return new func(...args);
    }  
 }