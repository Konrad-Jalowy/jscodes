function objectWithout(obj, property){
    let {[property]: removed, ...without} = obj;
    return without;
}