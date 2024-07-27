function objectWithUpdated(obj, property, value){
    let {[property]: removed, ...without} = obj;
    return {[property]: value, ...without};
}