function palindromeStack(str){

    str = str.replace(/\s/g, "").toLowerCase();
    
    let stack = [];

    for(const letter of str)
        stack.push(letter);

   

    for(const letter of str){
        let lastOne = stack.pop();
        if(letter !== lastOne)
            return false;
    }

    return true;
}