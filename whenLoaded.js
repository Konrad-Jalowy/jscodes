function whenLoaded(){
    let p = new Promise(function(resolve, reject){

    let stateCheck = setInterval(() => {
        if (document.readyState === 'complete') {
              clearInterval(stateCheck);
              resolve(true);
            }
        }, 100);

    });
    return p;
}