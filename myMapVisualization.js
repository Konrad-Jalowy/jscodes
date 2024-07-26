Array.prototype.myMap = function*(callbackFn, thisArg) {

    var context = thisArg || globalThis;

    var arr = [];              
    for (var i = 0; i < this.length; i++) { 
      arr.push(callbackFn.call(context, this[i], i, this));
      let arrToShow = [...arr.slice(0, i+1), ...this.slice(i+1)];
      yield arrToShow.toString();
    }
    return arr;
  }