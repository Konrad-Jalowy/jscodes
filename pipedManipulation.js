function pipedManipulation(...fns){
    return function(subject){
         fns.forEach((func) => {
            func(subject);
        });
    }
}