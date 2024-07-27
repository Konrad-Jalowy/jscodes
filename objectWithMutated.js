function objectWithMutated(obj, property, cb){

    let {[property]: removed, ...without} = obj;
    let value = cb(removed);

    return {[property]:value, ...without};

}