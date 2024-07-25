// function selectById(selector, cb){
//     let element = document.getElementById(selector);
//     if(element === null){
//         return cb(true, null);
//     } else {
//         return cb(false, element);
//     }
// }

function selectById(selector, cb){

    let element = document.getElementById(selector);
    
    return cb(element !== null, element);
   
}