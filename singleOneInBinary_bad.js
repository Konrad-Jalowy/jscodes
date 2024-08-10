function singleOneInBinary_bad(number){
      
    function countTrailingZeros(num){

        let cnt = 0;
        let flag= 1;
    
        
        while((num & flag) === 0){
            cnt++;
            flag = flag << 1;
        }
    
        return cnt;
    }

    return (countTrailingZeros(number) + Math.clz32(number)) === 31;
}