function confirmAndCall(prompt, cb){
    let response = confirm(prompt);
    if(!response){
        cb(new Error("Not confirmed"));
    } else {
        cb(null);
    }
}