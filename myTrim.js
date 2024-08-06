String.prototype.myTrim = function(trimmedChar = " "){


    let left = 0;
    let right = this.length - 1;

    while(this[left] === trimmedChar){
        left++;
    }

    while(this[right] === trimmedChar){

        if(this[right -1] !== trimmedChar)
            break;

        right--;
    }
    
    return this.substring(left, right);
}