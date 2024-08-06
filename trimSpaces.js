function trimSpaces(str){

    let trimmedChar = " ";

    let left = 0;
    let right = str.length - 1;

    while(str[left] === trimmedChar){
        left++;
    }

    while(str[right] === trimmedChar){

        if(str[right -1] !== trimmedChar)
            break;

        right--;
    }
    
    return str.substring(left, right);
}