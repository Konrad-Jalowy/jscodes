function selectById(selector){
    let p = new Promise(function(resolve, reject){

        let element = document.getElementById(selector);
       
        if(element === null)
            reject("Element doesnt exist");
        
        resolve(element);     
               
    });

    return p;
}