function validateQuotes(str){

    const allowedChars = new Set("'", "\"", "`");

    let stack = [];

    for(let i = 0; i <str.length; i++){
        let char = str[i];
        if(allowedChars.has(char) && stack.length === 0)
            stack.push(char);
        else if(allowedChars.has(char)){
            let lastOne = stack.pop();
            if(lastOne !== char)
                return false
        }
    }

    return stack.length === 0;

}