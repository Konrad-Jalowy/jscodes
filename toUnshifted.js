Array.prototype.toUnshifted = function(...args){
    return [...args, ...this];
}