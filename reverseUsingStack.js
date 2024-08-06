function reverseUsingStack(str){
    
    let stack = [];
     
    let i = 0;
    let reversedStr = "";
   
    while (i !== str.length) {
        stack.push(str.charAt(i));
        i++;
    }
  
    
    while (stack.length > 0) {
        reversedStr += stack.pop();
    }
    
    return reversedStr;
}