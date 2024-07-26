function Maybe(value) {
    this.value = value;
  }
  
Maybe.prototype.bind = function(transform) {
    return this.value === null || this.value === undefined ? this : new Maybe(transform(this.value));
  };

Maybe.prototype.valueOf = function(){
    return this.value;
}