function addSpacesToBinary(str){
    let arr = Array.from(str);

    return arr.reduceRight((acc, currVal, currIdx, array) => {
        
        let indexFromRight = array.length - 1 - currIdx;
        
        if( (indexFromRight % 4 === 0)){
           
            return currVal + " " + acc;
        }
        
        return currVal + acc;
    }, "");
    
}