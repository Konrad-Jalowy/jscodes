function Selected(selector){
    this.el = document.querySelector(selector);
}

Selected.prototype.bind = function(transform){
    return this.el == null ? this : transform(this.el);
}

Selected.prototype.valueOf = function(){
    return this.el;
}