function validateBrackets_v2(str){

    const opening = new Set(["(", "[", "{"]);
    const closing = new Set(["}", ")", "]"]);

    let map = new Map();

    map.set("(", ")");
    map.set("[", "]");
    map.set("{", "}");
    
    let stack = [];

    for(let i = 0; i <str.length; i++){
        if(opening.has(str[i])){
            stack.push(str[i]);
        } 
        else if(closing.has(str[i])){
            let lastInserted = stack.pop();
            if(map.get(lastInserted) !== str[i])
                return false;
        }
        
    }

    return stack.length === 0;
    

}